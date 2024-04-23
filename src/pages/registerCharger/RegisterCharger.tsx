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
import { flexAlignCenter, flexColumn } from "@/styles/common";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

export type ChargerInfo = string | null;

export interface cardsProps {
  speed: string;
  kw: string;
  fare: string;
  id: string;
}

export default function RegisterCharger() {
  const [error, setError] = useState(false);
  const [address, setAddress] = useState("");
  const [speed, setSpeed] = useState<ChargerInfo>(null);
  const [kw, setKw] = useState<ChargerInfo>(null);
  const [fare, setFare] = useState<ChargerInfo>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  const [cards, setCards] = useState<cardsProps[]>([]);
  const handleInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    switch (name) {
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

  const chargeInfoAdd = () => {
    console.log(`충전속도:${speed} / kw:${kw} / 요금:${fare}`);
    if (!speed || !kw || !fare) {
      return;
    }
    setCards((prev) => [{ speed, kw, fare, id: String(Date.now()) }, ...prev]);
    setSpeed(null);
    setKw(null);
    setFare(null);
  };
  return (
    <Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" />}
        text="충전기 등록"
      />
      <Main>
        <div>
          <SearchInput
            label="충전소"
            placeholder="충전소 주소를 입력해 주세요."
            error={error}
            errorMessage="필수 입력 항목입니다."
            name="address"
            value={address}
          />
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
        <ChargingType>
          <Label size="lg">충전기 타입</Label>
          <SelectCharger></SelectCharger>
        </ChargingType>
        {cards.length > 0 &&
          cards.map((card) => {
            return (
              <ChargerCard
                key={card.id}
                speed={card.speed}
                kw={card.kw}
                fare={card.fare}
              />
            );
          })}
        <Button size="lg" category="normal" onClick={chargeInfoAdd}>
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
  padding-bottom: 80px;
`;

const Main = styled.main`
  padding: 24px;
  padding-top: 80px;
  ${flexColumn};
  gap: 16px;
`;

const ChargingSpeed = styled.div`
  ${flexColumn};
  padding: 8px 0;
`;

const SpeedInputTag = styled.div`
  ${flexAlignCenter};
`;

const ChargingType = styled.div`
  ${flexColumn};
`;
