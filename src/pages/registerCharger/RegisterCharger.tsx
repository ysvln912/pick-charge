import { searchAddress } from "@/apis/kakaoSearchAddress";
import Button from "@/components/common/button/Button";
import IconButton from "@/components/common/iconButton/IconButton";
import Label from "@/components/common/label/Label";
import PhotoRegister from "@/components/common/photoRegister/PhotoRegister";
import SearchInput from "@/components/common/searchInput/SearchInput";
import SelectCharger from "@/components/common/selectCharger/SelectCharger";
import Textarea from "@/components/common/textarea/Textarea";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ChargerCard from "@/components/pages/registerCharger/ChargerCard";
import DetailedAddress from "@/components/pages/registerCharger/DetailedAddress";
import KwInput from "@/components/pages/registerCharger/KwInput";
import SearchResultItem from "@/components/pages/registerCharger/SearchResultItem";
import SpeedRadioBtn from "@/components/pages/registerCharger/SpeedRadioBtn";
import { useDebounce } from "@/hooks/useDebounce";
import React, { useEffect, useState } from "react";
import * as S from "./RegisterCharger.style";
export interface IChargerInfo {
  address: IAddress;
  keyword: string;
  detailed: string;
  speed: string;
  kw: string;
  fare: string;
}
export interface ICard {
  id: string;
  speed: string;
  kw: string;
  fare: string;
  chargerType: string;
}

export interface IAddress {
  name: string;
  location: string;
}

export interface ISearchResult {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export default function RegisterCharger() {
  const [chargerInfo, setChargerInfo] = useState<IChargerInfo>({
    address: {
      name: "",
      location: "",
    },
    keyword: "",
    detailed: "",
    speed: "",
    kw: "",
    fare: "",
  });
  const [chargerType, setChargerType] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [cards, setCards] = useState<ICard[]>([]);
  const [photos, setPhotos] = useState<File[]>([]);
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
  const debouncedKeyword = useDebounce(chargerInfo.keyword);
  const [show, setShow] = useState(false);

  const testInputValue = () => {
    console.log(
      JSON.stringify(chargerInfo),
      cards.map((card) => JSON.stringify(card)),
      content,
      photos.map((photo) => photo.name)
    );
  };

  const updateSearchItem = (name: string, location: string) => {
    setChargerInfo((info) => ({
      ...info,
      keyword: name,
      address: { name, location },
    }));
    setShow(false);
  };

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === "keyword") {
      setShow(true);
    }
    setChargerInfo((info) => ({ ...info, [name]: value }));
  };

  const updateChargerType = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setChargerType(value);
  };

  const addCard = () => {
    if (
      !chargerInfo.speed ||
      (chargerInfo.speed === "급속" && !chargerInfo.kw) ||
      !chargerInfo.fare ||
      !chargerType
    ) {
      return;
    }
    setCards((card) => [
      {
        id: String(Date.now()),
        chargerType,
        speed: chargerInfo.speed,
        kw: chargerInfo.kw,
        fare: chargerInfo.fare,
      },
      ...card,
    ]);
    setChargerInfo((prev) => ({ ...prev, kw: "", fare: "" }));
    setChargerType(null);
  };

  const deleteCard = (id: string) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const updateContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setContent(value);
  };

  const updatePhoto = (photo: File) => {
    setPhotos((prev) => [...prev, photo]);
  };
  const deletePhoto = (photos: File[]) => {
    setPhotos(photos);
  };

  useEffect(() => {
    searchAddress(debouncedKeyword, setSearchResults);
  }, [debouncedKeyword]);

  return (
    <S.Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" />}
        text="충전소 등록"
      />
      <S.Main>
        <S.ColumnBox>
          <S.Box>
            <SearchInput
              label="충전소 주소"
              placeholder="충전소 주소를 입력해 주세요."
              error={false}
              errorMessage="필수 입력 항목입니다."
              value={chargerInfo.keyword}
              onChange={updateInput}
              name="keyword"
            />
            {show && searchResults && searchResults.length > 0 && (
              <S.SearchResultsBox>
                {searchResults.map((result) => (
                  <SearchResultItem
                    key={result.id}
                    {...result}
                    onClick={updateSearchItem}
                  />
                ))}
              </S.SearchResultsBox>
            )}
          </S.Box>
          <DetailedAddress
            label="상세 주소"
            placeholder="아파트/건물명 동/호수 층"
            name="detailed"
            value={chargerInfo.detailed ?? ""}
            onChange={updateInput}
            error={false}
            errorMessage="필수 입력 항목입니다."
          />
        </S.ColumnBox>
        <Label size="lg">충전기 정보</Label>
        <S.ColumnBox>
          <Label size="md">충전 속도</Label>
          <S.RowBox>
            <SpeedRadioBtn
              id="fast"
              value="급속"
              onChange={updateInput}
              selectedOption={chargerInfo.speed}
            />
            {chargerInfo.speed === "급속" && (
              <KwInput
                id="fastKw"
                label="kW"
                name="kw"
                value={chargerInfo.kw ?? ""}
                onChange={updateInput}
              />
            )}
            <SpeedRadioBtn
              id="slow"
              value="완속"
              onChange={updateInput}
              selectedOption={chargerInfo.speed}
            />
          </S.RowBox>
        </S.ColumnBox>
        <S.ColumnBox>
          <Label size="md">요금</Label>
          <KwInput
            id="kwh"
            label="원/kWh"
            name="fare"
            value={chargerInfo.fare ?? ""}
            onChange={updateInput}
          />
        </S.ColumnBox>
        <SelectCharger
          label
          value={chargerType}
          onChange={updateChargerType}
          type={chargerInfo.speed === "급속" ? "fast" : "slow"}
          disabled={chargerInfo.speed === ""}
        />

        {cards.length > 0 &&
          cards.map((card) => {
            return <ChargerCard key={card.id} {...card} onClick={deleteCard} />;
          })}
        <Button size="lg" category="normal" onClick={addCard}>
          충전기 추가하기
        </Button>
        <Textarea
          label="내용"
          placeholder="이용에 대한 상세한 정보 (비용,이용 시간 등)를 작성해 주세요."
          name="content"
          value={content ?? ""}
          onChange={updateContent}
        >
          {content}
        </Textarea>
        <PhotoRegister
          photos={photos}
          updatePhoto={updatePhoto}
          deletePhoto={deletePhoto}
        />
      </S.Main>
      <Button size="full" category="normal" onClick={testInputValue}>
        작성완료
      </Button>
    </S.Container>
  );
}
