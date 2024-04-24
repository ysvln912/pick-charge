import { searchAddress } from "@/apis/kakaoSearchAddress";
import Button from "@/components/common/button/Button";
import IconButton from "@/components/common/iconButton/IconButton";
import Label from "@/components/common/label/Label";
import LabelInput from "@/components/common/labelInput/LabelInput";
import PhotoRegister from "@/components/common/photoRegister/PhotoRegister";
import SearchInput from "@/components/common/searchInput/SearchInput";
import SelectCharger from "@/components/common/selectCharger/SelectCharger";
import Textarea from "@/components/common/textarea/Textarea";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ChargerCard from "@/components/pages/registerCharger/ChargerCard";
import NumberInput from "@/components/pages/registerCharger/NumberInput";
import RadioButton from "@/components/pages/registerCharger/RadioButton";
import SearchResultItem from "@/components/pages/registerCharger/SearchResultItem";
import { useDebounce } from "@/hooks/useDebounce";
import React, { ChangeEvent, useEffect, useState } from "react";
import * as S from "./RegisterCharger.style";

export type ChargerInfo = string | null;

export interface cardsProps {
  speed: string;
  kw: string;
  fare: string;
  shape: string;
  id: string;
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

export interface IAddress {
  name: string;
  address: string;
}

export default function RegisterCharger() {
  const [keyword, setKeyword] = useState("");
  const [address, setAddress] = useState<IAddress>({ name: "", address: "" });
  const [detailed, setDetailed] = useState("");
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
  const [speed, setSpeed] = useState<ChargerInfo>(null);
  const [kw, setKw] = useState<ChargerInfo>(null);
  const [fare, setFare] = useState<ChargerInfo>(null);
  const [shape, setShape] = useState<ChargerInfo>(null);
  const [content, setContent] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [cards, setCards] = useState<cardsProps[]>([]);
  const debouncedKeyword = useDebounce(keyword);
  const [show, setShow] = useState(false);
  const handleInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case "detailed":
        setDetailed(value);
        break;
      case "keyword":
        setShow(true);
        setKeyword(value);
        break;
      case "speed":
        setSpeed(value);
        break;
      case "kw":
        setKw(value);
        break;
      case "fare":
        setFare(value);
        break;
      default:
        break;
    }
  };
  const updatePhoto = (photo: File) => {
    setPhotos((prev) => [...prev, photo]);
  };

  const deletePhoto = (photos: File[]) => {
    setPhotos(photos);
  };

  const changeShape = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setShape(value);
  };

  const handleSearch = (name: string, address: string) => {
    setAddress({ name, address });
    setKeyword(name);
    setShow(false);
  };

  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setContent(value);
  };

  const addChargeInfoCard = () => {
    if (!speed || !kw || !fare || !shape) {
      return;
    }
    setCards((prev) => [
      { speed, kw, fare, shape, id: String(Date.now()) },
      ...prev,
    ]);
    setSpeed(null);
    setKw(null);
    setFare(null);
    setShape(null);
  };

  const deleteChargeInfoCard = (id: string) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const onCompletedBtnClick = () => {
    console.log(
      `장소 이름: ${address.name} / 장소 주소: ${
        address.address
      } / 상세 주소: ${detailed}
      / 충전기 정보: ${cards.map((card) =>
        JSON.stringify(card)
      )} / 내용: ${content} / 사진: ${photos.map((file) => file.name)}`
    );
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
        <div>
          <S.AddressBox>
            <SearchInput
              label="충전소"
              placeholder="충전소 주소를 입력해 주세요."
              errorMessage="필수 입력 항목입니다."
              name="keyword"
              value={keyword}
              onChange={handleInfoChange}
              result={address.name}
            />
            <LabelInput
              label="상세주소"
              placeholder="아파트/건물명 동/호수 층"
              value={detailed}
              name="detailed"
              onChange={handleInfoChange}
            />
            {show && searchResults && searchResults.length > 0 && (
              <S.SearchResultsBox>
                {searchResults.map((result) => (
                  <SearchResultItem
                    key={result.id}
                    {...result}
                    onItemClick={handleSearch}
                  />
                ))}
              </S.SearchResultsBox>
            )}
          </S.AddressBox>
          <Label size="lg">충전기 정보</Label>
          <S.ChargingSpeed>
            <Label size="md">충전 속도</Label>
            <S.SpeedInputTag>
              <RadioButton
                id="fast"
                value="급속"
                selectedOption={speed}
                handleChange={handleInfoChange}
              />
              {speed === "급속" && (
                <NumberInput
                  id="fast"
                  text="kW"
                  value={kw}
                  name="kw"
                  handleChange={handleInfoChange}
                />
              )}
              <RadioButton
                id="slow"
                value="완속"
                selectedOption={speed}
                handleChange={handleInfoChange}
              />
              {speed === "완속" && (
                <NumberInput
                  id="slow"
                  text="kW"
                  value={kw}
                  name="kw"
                  handleChange={handleInfoChange}
                />
              )}
            </S.SpeedInputTag>
          </S.ChargingSpeed>
        </div>
        <div>
          <Label>요금</Label>
          <NumberInput
            id="fare"
            text="원 /kWh"
            value={fare}
            name="fare"
            handleChange={handleInfoChange}
          />
        </div>
        <SelectCharger
          label
          value={shape}
          onChange={changeShape}
          type={
            speed === "급속" ? "fast" : speed === "완속" ? "slow" : "noOptions"
          }
        />
        {cards.length > 0 &&
          cards.map((card) => {
            return (
              <ChargerCard
                key={card.id}
                {...card}
                onDelete={deleteChargeInfoCard}
              />
            );
          })}
        <Button size="lg" category="normal" onClick={addChargeInfoCard}>
          충전기 추가하기
        </Button>
        <Textarea
          label="내용"
          placeholder="이용에 대한 상세한 정보(비용, 이용 시간 등) 를 작성해 주세요."
          name="content"
          onChange={onContentChange}
          value={content}
        >
          {content}
        </Textarea>
        <PhotoRegister
          photos={photos}
          updatePhoto={updatePhoto}
          deletePhoto={deletePhoto}
        />
      </S.Main>
      <Button size="full" category="normal" onClick={onCompletedBtnClick}>
        작성완료
      </Button>
    </S.Container>
  );
}
