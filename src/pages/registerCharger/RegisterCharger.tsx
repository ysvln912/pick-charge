import Button from "@/components/common/button/Button";
import IconButton from "@/components/common/iconButton/IconButton";
import Label from "@/components/common/label/Label";
import PhotoRegister from "@/components/common/photoRegister/PhotoRegister";
import SearchInput from "@/components/common/searchInput/SearchInput";
import SelectCharger from "@/components/common/selectCharger/SelectCharger";
import Textarea from "@/components/common/textarea/Textarea";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import NumberInput from "@/components/pages/registerCharger/NumberInput";
import RadioButton from "@/components/pages/registerCharger/RadioButton";
import { flexAlignCenter, flexColumn } from "@/styles/common";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

export default function RegisterCharger() {
  const [error, setError] = useState(false);
  const [address, setAddress] = useState("");
  const [speed, setSpeed] = useState<string | null>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  const handleSpeedChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSpeed(value);
  };
  const updatePhoto = (photo: File) => {
    setPhotos((prev) => [...prev, photo]);
  };

  const deletePhoto = (photos: File[]) => {
    setPhotos(photos);
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
                handleChange={handleSpeedChange}
              />
              {speed === "급속" && <NumberInput id="fast" text="kW" />}
              <RadioButton
                id="slow"
                value="완속"
                selectedOption={speed}
                handleChange={handleSpeedChange}
              />
              {speed === "완속" && <NumberInput id="slow" text="kW" />}
            </SpeedInputTag>
          </ChargingSpeed>
        </div>
        <div>
          <Label>요금</Label>
          <NumberInput id="fare" text="원 /kWh" />
        </div>
        <ChargingType>
          <Label size="lg">충전기 타입</Label>
          <SelectCharger></SelectCharger>
        </ChargingType>
        <Button size="lg" category="normal">
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

const Container = styled.section``;

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
