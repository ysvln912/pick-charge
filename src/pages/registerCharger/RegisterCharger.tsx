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

export interface IChargerInfo {
  detailed: string;
  speed: string;
  kw: string;
  kwh: string;
}

export default function RegisterCharger() {
  const [chargerInfo, setChargerInfo] = useState<IChargerInfo>({
    detailed: "",
    speed: "",
    kw: "",
    kwh: "",
  });
  const [chargerType, setChargerType] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);

  const testInputValue = () => {
    console.log(
      chargerInfo,
      chargerType,
      content,
      photos.map((photo) => photo.name)
    );
  };

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setChargerInfo((info) => ({ ...info, [name]: value }));
  };

  const updateChargerType = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setChargerType(value);
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
            name="detailed"
            value={chargerInfo.detailed ?? ""}
            onChange={updateInput}
            error={false}
            errorMessage="필수 입력 항목입니다."
          />
        </ColumnBox>
        <Label size="lg">충전기 정보</Label>
        <ColumnBox>
          <Label size="md">충전 속도</Label>
          <RowBox>
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
          </RowBox>
        </ColumnBox>
        <ColumnBox>
          <Label size="md">요금</Label>
          <KwInput
            id="kwh"
            label="원/kWh"
            name="kwh"
            value={chargerInfo.kwh ?? ""}
            onChange={updateInput}
          />
        </ColumnBox>
        <SelectCharger
          label
          value={chargerType}
          onChange={updateChargerType}
          type={chargerInfo.speed === "급속" ? "fast" : "slow"}
          disabled={chargerInfo.speed === ""}
        />
        <Button size="lg" category="normal" onClick={testInputValue}>
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
