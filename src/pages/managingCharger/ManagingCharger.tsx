import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";
import IconButton from "@/components/common/iconButton/IconButton";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import { flexColumn } from "@/styles/common";
import styled from "styled-components";

export default function ManagingCharger() {
  const COUNT = 3;

  return (
    <Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" />}
        text="충전기 관리"
      />
      <Title>내가 관리하는 {COUNT}개의 충전기</Title>
      <div>
        {sampleData.map((data) => {
          return (
            <ChargingInfo
              info={data}
              like={false}
              tag={false}
              border="bottom"
              path={`/charger/${data.id}`}
            />
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 1.5rem;
  padding-top: 80px;
  ${flexColumn}
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;

export const sampleData: Charger[] = [
  {
    id: 1,
    charger_location: "서울특별시 마포구 월드컵북로 502-37",
    charger_name: "상암월드컵파크3단지",
    charging_speed: "급속",
    status: "이용가능",
    latitude: 37.123456,
    longitude: -122.345678,
    content: "이 충전기는 전s 차량을 위한 빠른 충전을 지원합니다.",
    avg_rate: 3,
    company_name: "에코차지 주식회사",
    member_price: 10,
    nonmember_price: 15,
    personal_price: 12,
    charger_type: "DC차데모AC3상",
    charger_role: "개인",
  },
  {
    id: 2,
    charger_location: "서울 송파구 올림픽로43길 88 서울아산병원 (풍납동 388-1)",
    charger_name: "서울아산병원 전기차충전소",
    charging_speed: "완속",
    status: "이용자제한",
    latitude: 37.987654,
    longitude: -122.876543,
    content: "이 충전s는 전기 차량을 위한 표준 충전을 제공합니다.",
    avg_rate: 1,
    company_name: "에코차지 주식회사",
    member_price: 5,
    nonmember_price: 10,
    personal_price: 8,
    charger_type: "완속",
    charger_role: "공공",
  },
  {
    id: 3,
    charger_location:
      "서울 강동구 고덕로 131 강동 롯데캐슬퍼스트아파트 (암사동 414-2)",
    charger_name: "서울시 강동구 강동롯데캐슬 전기차충전소",
    charging_speed: "급속",
    status: "이용자제한",
    latitude: 37.123456,
    longitude: -122.345678,
    content: "이 충전기는 전s 차량을 위한 빠른 충전을 지원합니다.",
    avg_rate: 5,
    company_name: "에코차지 주식회사",
    member_price: 10,
    nonmember_price: 15,
    personal_price: 12,
    charger_type: "DC차데모AC3상",
    charger_role: "개인",
  },
];
