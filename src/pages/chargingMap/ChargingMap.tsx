import React from "react";
import { Charger } from "@/components/common/chargingInfo/ChargingInfo";
import ChargerMap from "@/components/pages/charger/chargerMap/ChargerMap";

export default function ChargingMap() {
    const sampleData: Charger[] = [
        {
            id: 1,
            charger_location: "서울특별시 광진구 자양로 222",
            charger_name: "퀵차지 2000",
            charging_speed: "급속",
            status: "이용가능",
            latitude: 37.537598,
            longitude: 127.082334,
            content: "이 충전기는 전기차를 위한 빠른 충전을 지원합니다.",
            avg_rate: 4.5,
            company_name: "에코차지 주식회사",
            member_price: 10,
            nonmember_price: 15,
            personal_price: 12,
            charger_type: "DC차데모AC3상",
            charger_role: "개인",
        },
        {
            id: 2,
            charger_location: "서울특별시 광진구 아차산로 200",
            charger_name: "에코차지 표준",
            charging_speed: "완속",
            status: "이용자제한",
            latitude: 37.537216,
            longitude: 127.071839,
            content: "이 충전기는 전기차를 위한 표준 충전을 제공합니다.",
            avg_rate: 3.8,
            company_name: "에코차지 주식회사",
            member_price: 5,
            nonmember_price: 10,
            personal_price: 8,
            charger_type: "완속",
            charger_role: "공공",
        },
        {
            id: 3,
            charger_location: "서울특별시 광진구 능동로 100",
            charger_name: "스마트차지 100",
            charging_speed: "급속",
            status: "이용가능",
            latitude: 37.543924,
            longitude: 127.075433,
            content: "이 충전기는 스마트한 기능을 제공하는 급속 충전기입니다.",
            avg_rate: 4.2,
            company_name: "스마트차지 주식회사",
            member_price: 12,
            nonmember_price: 18,
            personal_price: 15,
            charger_type: "DC차데모",
            charger_role: "개인",
        },
        {
            id: 4,
            charger_location: "서울특별시 광진구 뚝섬로 100",
            charger_name: "편의차지 500",
            charging_speed: "완속",
            status: "이용가능",
            latitude: 37.548327,
            longitude: 127.07299,
            content: "이 충전기는 편의시설과 함께 제공되는 완속 충전기입니다.",
            avg_rate: 4.0,
            company_name: "편의차지 주식회사",
            member_price: 8,
            nonmember_price: 12,
            personal_price: 10,
            charger_type: "AC3상",
            charger_role: "공공",
        },
    ];

    
    return (
        <div>
            <p>ChargingMap</p>
            <ChargerMap info ={sampleData}/>
        </div>
    );
}
