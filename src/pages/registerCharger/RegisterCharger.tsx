import Button from "@/components/common/button/Button";
import IconButton from "@/components/common/iconButton/IconButton";
import Label from "@/components/common/label/Label";
import PhotoRegister from "@/components/common/photoRegister/PhotoRegister";
import SearchInput from "@/components/common/searchInput/SearchInput";
import SelectCharger from "@/components/common/selectCharger/SelectCharger";
import Textarea from "@/components/common/textarea/Textarea";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import DetailedAddress from "@/components/pages/registerCharger/DetailedAddress";
import KwInput from "@/components/pages/registerCharger/KwInput";
import SpeedRadioBtn from "@/components/pages/registerCharger/SpeedRadioBtn";
import { flexAlignCenter, flexColumn } from "@/styles/common";
import React, { useState } from "react";
import styled from "styled-components";

export default function RegisterCharger() {
  const [photos, setPhotos] = useState<File[]>([]);
  const [chargerType, setChargerType] = useState<string | null>(null);

  const updatePhoto = (photo: File) => {
    setPhotos((prev) => [...prev, photo]);
  };
  const deletePhoto = (photos: File[]) => {
    setPhotos(photos);
  };

  const updateChargerType = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setChargerType(value);
  };
  return (
    <Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" />}
        text="충전소 등록"
      />
      <Main>
        <ColumnBox>
          <SearchInput
            label="충전소 주소"
            placeholder="충전소 주소를 입력해 주세요."
            error={false}
            errorMessage="필수 입력 항목입니다."
          />
          <DetailedAddress
            label="상세 주소"
            placeholder="아파트/건물명 동/호수 층"
            error={false}
            errorMessage="필수 입력 항목입니다."
          />
        </ColumnBox>
        <Label size="lg">충전기 정보</Label>
        <ColumnBox>
          <Label size="md">충전 속도</Label>
          <RowBox>
            <SpeedRadioBtn id="fast" value="급속" />
            <KwInput id="fastKw" label="kW" name="kw" />
            <SpeedRadioBtn id="slow" value="완속" />
            <KwInput id="slowKw" label="kW" name="kw" />
          </RowBox>
        </ColumnBox>
        <ColumnBox>
          <Label size="md">요금</Label>
          <KwInput id="kwh" label="원/kWh" name="kwh" />
        </ColumnBox>
        <SelectCharger label value={chargerType} onChange={updateChargerType} />
        <Button size="lg" category="normal">
          충전기 추가하기
        </Button>
        <Textarea
          label="내용"
          placeholder="이용에 대한 상세한 정보 (비용,이용 시간 등)를 작성해 주세요."
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

const Main = styled.div`
  padding: 1.5rem;
  padding-top: 72px;
  ${flexColumn}
  gap: 1rem;
`;

const ColumnBox = styled.div`
  ${flexColumn};
`;

const RowBox = styled.div`
  ${flexAlignCenter};
`;
