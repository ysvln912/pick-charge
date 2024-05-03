import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./ChargerListView.style";
import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";
import Button from "@/components/common/button/Button";
import SolidMapIcon from "@/components/common/icons/SolidMapIcon";
import { SearchInfo } from "../chargerMapView/ChargerMapView";
import ChargerSearch from "@/components/pages/charger/ChargerSearch";
import { ChargerStation } from "@/types/charger";

const sampleData: ChargerStation[] = [
    {
        chargerStationId: 1,
        chargerLocation: "서울특별시 광진구 구의강변로 11",
        chargerName: "자양한양아파트 앞 전기차 충전소",
        chargers: [
            {
                chargerId: 51423,
                chargerLocation: "서울특별시 광진구 구의강변로 11",
                chargerName: "자양한양아파트 앞 전기차 충전소",
                latitude: 37.531773223,
                longitude: 127.09169799,
                chargerTypeList: [
                    {
                        id: 62227,
                        type: "DC콤보",
                    },
                ],
                chargerRole: "공공",
                avgRate: 0,
                chargerStatus: "이용가능",
                chargingSpeed: "급속",
            },
        ],
    },
    {
        chargerStationId: 2,
        chargerLocation: "서울특별시 광진구 구의강변로5길 7",
        chargerName: "성동강변파크빌",
        chargers: [
            {
                chargerId: 40575,
                chargerLocation: "서울특별시 광진구 구의강변로5길 7",
                chargerName: "성동강변파크빌",
                latitude: 37.537837,
                longitude: 127.092781,
                chargerTypeList: [
                    {
                        id: 51156,
                        type: "AC완속",
                    },
                ],
                chargerRole: "공공",
                avgRate: 0,
                chargerStatus: "이용가능",
                chargingSpeed: "완속",
            },
        ],
    },
    {
        chargerStationId: 3,
        chargerLocation: "서울특별시 광진구 광나루로56길 29",
        chargerName: "서울광진 현대프라임5",
        chargers: [
            {
                chargerId: 94450,
                chargerLocation: "서울특별시 광진구 광나루로56길 29",
                chargerName: "서울광진 현대프라임5",
                latitude: 37.538079799,
                longitude: 127.09784394,
                chargerTypeList: [
                    {
                        id: 107067,
                        type: "AC완속",
                    },
                ],
                chargerRole: "공공",
                avgRate: 0,
                chargerStatus: "이용가능",
                chargingSpeed: "완속",
            },
            {
                chargerId: 94451,
                chargerLocation: "서울특별시 광진구 광나루로56길 29",
                chargerName: "서울광진 현대프라임5",
                latitude: 37.538079799,
                longitude: 127.09784394,
                chargerTypeList: [
                    {
                        id: 107068,
                        type: "DC콤보",
                    },
                    {
                        id: 107069,
                        type: "DC차데모",
                    },
                ],
                chargerRole: "공공",
                avgRate: 0,
                chargerStatus: "이용가능",
                chargingSpeed: "급속",
            },
        ],
    },
    {
        chargerStationId: 4,
        chargerLocation: "서울특별시 광진구 광나루로56길 29",
        chargerName: "서울광진 현대프라임4",
        chargers: [
            {
                chargerId: 94448,
                chargerLocation: "서울특별시 광진구 광나루로56길 29",
                chargerName: "서울광진 현대프라임4",
                latitude: 37.537622764,
                longitude: 127.09757462,
                chargerTypeList: [
                    {
                        id: 107065,
                        type: "AC완속",
                    },
                ],
                chargerRole: "개인",
                avgRate: 0,
                chargerStatus: "이용가능",
                chargingSpeed: "완속",
            },
            {
                chargerId: 94449,
                chargerLocation: "서울특별시 광진구 광나루로56길 29",
                chargerName: "서울광진 현대프라임4",
                latitude: 37.537622764,
                longitude: 127.09757462,
                chargerTypeList: [
                    {
                        id: 107066,
                        type: "AC완속",
                    },
                ],
                chargerRole: "개인",
                avgRate: 0,
                chargerStatus: "이용가능",
                chargingSpeed: "완속",
            },
        ],
    },
];

export default function ChargerListView() {
    const navigate = useNavigate();
    const [seaerchInfo, setSearchInfo] = useState<SearchInfo>({
        address: {
            name: "",
            location: "",
            latitude: 0,
            longitude: 0,
        },
        keyword: "",
    });

    useEffect(()=>{
        console.log("api 요청")
    },[seaerchInfo])

    

    return (
        <div>
            <ChargerSearch
                chargerInfo={seaerchInfo}
                setChargerInfo={setSearchInfo}
                viewtype="list"
            />
            <div>
            {/* {sampleData.map((data) => {
                return (
                    <ChargingInfo key={data.id}
                        info={data}
                        like={false}
                        tag={true}
                        border="bottom"
                        onClick={()=>{navigate(`/charger/${data.id}`)}}
                    />
                );
            })} */}
            {sampleData.map((chargerStation) => { return chargerStation.chargers.map((charger)=>{
                return <ChargingInfo key={charger.chargerId}
                info={charger}
                like={false}
                tag={true}
                border="bottom"
                onClick={()=>{navigate(`/charger/${charger.chargerId}`)}}
            />
            }) })}
            </div>
            <S.ButtonContainer>
                <Button
                    size="md"
                    category="normal"
                    onClick={() => {
                        navigate("/charger/map");
                    }}>
                    <SolidMapIcon />
                    지도보기
                </Button>
            </S.ButtonContainer>
           
        </div>
    );
}
