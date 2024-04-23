import Button from "@/components/common/button/Button";
import { flexAlignCenter, flexColumn } from "@/styles/common";
import React from "react";
import styled from "styled-components";

export interface ChargerCardProps {
  speed: string;
  kw: string;
  fare: string;
}

export default function ChargerCard({ speed, kw, fare }: ChargerCardProps) {
  return (
    <Card>
      <List>
        <Item>
          <Name>충전속도</Name>
          <Value>{`${speed} ${kw}kW`}</Value>
        </Item>
        <Item>
          <Name>요금</Name>
          <Value>{`${fare}원`}</Value>
        </Item>
        <Item>
          <Name>충전기 타입</Name>
          <Value>수퍼차저</Value>
        </Item>
      </List>
      <Button size="full" category="retry">
        삭제
      </Button>
    </Card>
  );
}

const Card = styled.div`
  width: 340px;
  height: 140px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
  border-radius: 5px;
  ${flexColumn}
  justify-content: center;
`;

const List = styled.ul`
  ${flexColumn};
  padding-bottom: 16px;
  gap: 8px;
`;

const Item = styled.li`
  ${flexAlignCenter};
`;

const Name = styled.span`
  width: 80px;
  color: ${({ theme }) => theme.PALETTE.mainColor};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

const Value = styled.span`
  color: ${({ theme }) => theme.PALETTE.gray[400]};
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;
