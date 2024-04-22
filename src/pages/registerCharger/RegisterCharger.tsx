import IconButton from "@/components/common/iconButton/IconButton";
import Label from "@/components/common/label/Label";
import SearchInput from "@/components/common/searchInput/SearchInput";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import RadioButton from "@/components/pages/registerCharger/RadioButton";
import { flexAlignCenter, flexColumn } from "@/styles/common";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

export default function RegisterCharger() {
  const [error, setError] = useState(false);
  const [address, setAddress] = useState("");
  const [speed, setSpeed] = useState<string | null>(null);
  console.log(speed);
  const handleSpeedChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSpeed(value);
  };
  return (
    <Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" />}
        text="충전기 등록"
      />
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
          <RadioButton
            id="slow"
            value="완속"
            selectedOption={speed}
            handleChange={handleSpeedChange}
          />
        </SpeedInputTag>
      </ChargingSpeed>
    </Container>
  );
}

const Container = styled.section`
  padding: 24px;
  padding-top: 80px;
  ${flexColumn};
`;

const ChargingSpeed = styled.div`
  ${flexColumn};
  padding: 8px 0;
`;

const SpeedInputTag = styled.div`
  ${flexAlignCenter};
  padding: 8px 0;
`;
