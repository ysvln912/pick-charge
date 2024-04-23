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
import NumberInput from "@/components/pages/registerCharger/NumberInput";
import RadioButton from "@/components/pages/registerCharger/RadioButton";
import SearchResultItem from "@/components/pages/registerCharger/SearchResultItem";
import { useDebounce } from "@/hooks/useDebounce";
import { flexAlignCenter, flexColumn } from "@/styles/common";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

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

export default function RegisterCharger() {
  const [error, setError] = useState(false);
  const [address, setAddress] = useState("");
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
  const [speed, setSpeed] = useState<ChargerInfo>(null);
  const [kw, setKw] = useState<ChargerInfo>(null);
  const [fare, setFare] = useState<ChargerInfo>(null);
  const [shape, setShape] = useState<ChargerInfo>(null);
  const [content, setContent] = useState<ChargerInfo>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  const [cards, setCards] = useState<cardsProps[]>([]);
  const debouncedKeyword = useDebounce(address, 1000);
  console.log(speed);
  const handleInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case "address":
        setAddress(value);
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

  const changeShape = (e: any) => {
    const value = e.target.value;
    setShape(value);
  };

  const chargeCardAdd = () => {
    console.log(`충전속도:${speed} / kw:${kw} / 요금:${fare}`);
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

  useEffect(() => {
    searchAddress(debouncedKeyword, setSearchResults);
  }, [debouncedKeyword]);

  return (
    <Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" />}
        text="충전소 등록"
      />
      <Main>
        <div>
          <SearchInputAndResult>
            <SearchInput
              label="충전소"
              placeholder="충전소 주소를 입력해 주세요."
              error={error}
              errorMessage="필수 입력 항목입니다."
              name="address"
              value={address}
              onChange={handleInfoChange}
            />
            {searchResults && searchResults.length > 0 && (
              <SearchResultContainer>
                {searchResults.map((result) => (
                  <SearchResultItem key={result.id} {...result} />
                ))}
              </SearchResultContainer>
            )}
          </SearchInputAndResult>
          <Label size="lg">충전기 정보</Label>
          <ChargingSpeed>
            <Label size="md">충전 속도</Label>
            <SpeedInputTag>
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
            </SpeedInputTag>
          </ChargingSpeed>
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
          onChange={changeShape}
          type={speed === "급속" ? "fast" : speed === "완속" ? "slow" : "all"}
        />
        {cards.length > 0 &&
          cards.map((card) => {
            return (
              <ChargerCard
                key={card.id}
                speed={card.speed}
                kw={card.kw}
                fare={card.fare}
                shape={card.shape}
              />
            );
          })}
        <Button size="lg" category="normal" onClick={chargeCardAdd}>
          충전기 추가하기
        </Button>
        <Textarea
          label="내용"
          placeholder="이용에 대한 상세한 정보(비용, 이용 시간 등) 를 작성해 주세요."
        ></Textarea>
        <PhotoRegister
          photos={photos}
          updatePhoto={updatePhoto}
          deletePhoto={deletePhoto}
        />
      </Main>
      <Button size="full" category="normal">
        작성완료
      </Button>
    </Container>
  );
}

const Container = styled.section`
  padding-bottom: 68px;
`;

const Main = styled.main`
  padding: 24px;
  padding-top: 80px;
  ${flexColumn};
  gap: 16px;
`;

const SearchInputAndResult = styled.div`
  position: relative;
`;

const SearchResultContainer = styled.div`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
  background-color: ${({ theme }) => theme.PALETTE.white};
  ${flexColumn};
  position: absolute;
  width: 100%;
  top: 80px;
  left: 0;
  z-index: 1;
`;

const ChargingSpeed = styled.div`
  ${flexColumn};
  padding: 8px 0;
`;

const SpeedInputTag = styled.div`
  ${flexAlignCenter};
`;
