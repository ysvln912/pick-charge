import React from "react";
import * as S from "./Home.style";
import { Charger } from "@/components/common/chargingInfo/ChargingInfo";
import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";

export default function Home() {


  
  const sampleData: Charger[] = [
    {
      "id": 1,
      "charger_location": "서울특별시 마포구 월드컵북로 502-37",
      "charger_name": "퀵차지 2000",
      "charging_speed": "급속",
      "status": "이용가능",
      "latitude": 37.123456,
      "longitude": -122.345678,
      "content": "이 충전기는 전s 차량을 위한 빠른 충전을 지원합니다.",
      "avg_rate": 4.5,
      "company_name": "에코차지 주식회사",
      "member_price": 10,
      "nonmember_price": 15,
      "personal_price": 12,
      "charger_type": "DC차데모AC3상",
      "charger_role": "개인"
    },
    {
      "id": 2,
      "charger_location": "서울 송파구 올림픽로43길 88 서울아산병원 (풍납동 388-1)",
      "charger_name": "에코차지 표준",
      "charging_speed": "완속",
      "status": "이용자제한",
      "latitude": 37.987654,
      "longitude": -122.876543,
      "content": "이 충전s는 전기 차량을 위한 표준 충전을 제공합니다.",
      "avg_rate": 3.8,
      "company_name": "에코차지 주식회사",
      "member_price": 5,
      "nonmember_price": 10,
      "personal_price": 8,
      "charger_type": "완속",
      "charger_role": "공공"
    }
  ]
  ;
  
  
    return (
        <div>
            <S.Test>Home, 메인페이지</S.Test>

            <div>
              <p>즐겨찾는 충전소</p>
              {sampleData.map((data)=>{
                return <ChargingInfo info={data} like={true} border="full" />
              })}
              <p>즐겨찾는 충전소</p>
              {sampleData.map((data)=>{
                return <ChargingInfo info={data} like={false} border="bottom"/>
              })}
              
            </div>
        </div>
    );
}
