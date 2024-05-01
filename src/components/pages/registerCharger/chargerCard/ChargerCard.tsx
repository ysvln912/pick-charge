import Button from "@/components/common/button/Button";
import { ICard } from "@/pages/registerCharger/RegisterCharger";
import * as S from "./ChargerCard.style";
import React from "react";

export interface ChargerCardProps extends ICard {
  onClick: (id: string) => void;
}

export default function ChargerCard({
  id,
  speed,
  fare,
  chargerType,
  onClick,
}: ChargerCardProps) {
  return (
    <S.Card>
      <S.List>
        <S.Item>
          <S.Name>충전속도</S.Name>
          <S.Value>{speed}</S.Value>
        </S.Item>
        <S.Item>
          <S.Name>요금</S.Name>
          <S.Value>{`${fare}원`}</S.Value>
        </S.Item>
        <S.Item>
          <S.Name>충전기 타입</S.Name>
          <S.Value>{chargerType}</S.Value>
        </S.Item>
      </S.List>
      <Button size="full" category="retry" onClick={() => onClick(id)}>
        삭제
      </Button>
    </S.Card>
  );
}
