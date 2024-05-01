import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./ChargerMapView.style";
import ChargerMap from "@/components/pages/charger/chargerMap/ChargerMap";
import Button from "@/components/common/button/Button";
import ListIcon from "@/components/common/icons/ListIcon";
import ChargerSearch from "@/components/pages/charger/ChargerSearch";
import { ChargerStation } from "@/types/charger";

export interface SearchInfo {
    address: {
        name: string;
        location: string;
        latitude: number;
        longitude: number;
    };
    keyword: string;
}

export interface MapCenter {
    lat: number;
    lon: number;
}

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

export default function ChargerMapView() {
    const navigate = useNavigate();
    const [mapCenter, setMapCenter] = useState<MapCenter>({
        lat: 0,
        lon: 0,
    });

    const [chargerInfo, setChargerInfo] = useState<SearchInfo>({
        address: {
            name: "",
            location: "",
            latitude: 0,
            longitude: 0,
        },
        keyword: "",
    });

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도

                setMapCenter({
                    lat,
                    lon,
                });
            });
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            console.log("geolocation을 사용할수 없어요..");
        }
    }, []);

    useEffect(() => {
        if (chargerInfo.address.location) {
            var geocoder = new window.kakao.maps.services.Geocoder();
            var coords: { lat: number; lon: number } = { lat: 0, lon: 0 };

            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(
                chargerInfo.address.location,
                function (result: any, status: string) {
                    // 정상적으로 검색이 완료됐으면
                    if (status === window.kakao.maps.services.Status.OK) {
                        coords = {
                            lat: Number(result[0].y),
                            lon: Number(result[0].x),
                        };
                        setMapCenter({
                            lat: coords.lat,
                            lon: coords.lon,
                        });
                    } else {
                        console.log("위도/경도를 구할 수 없습니다.");
                    }
                }
            );
        }
    }, [chargerInfo]);

    useEffect(() => {
        var geocoder = new window.kakao.maps.services.Geocoder();
        
        geocoder.coord2Address(
            mapCenter.lon,
            mapCenter.lat,
            function (result: any, status: string) {
                if (status === window.kakao.maps.services.Status.OK) {
                    var detailAddr = !!result[0].road_address
                        ? result[0].road_address.address_name
                        : result[0].address.address_name;
                    
                    console.log(`api 요청 : ${detailAddr}`)
                }
            }
        );
    }, [mapCenter]);

    return (
        <div>
            <ChargerSearch
                chargerInfo={chargerInfo}
                setChargerInfo={setChargerInfo}
            />
            <S.ButtonContainer>
                <Button
                    size="md"
                    category="rounded"
                    onClick={() => {
                        navigate("/charger/list");
                    }}>
                    <ListIcon />
                    <p>목록보기</p>
                </Button>
            </S.ButtonContainer>
            <ChargerMap
                info={sampleData}
                mapCenter={mapCenter}
                setMapCenter={setMapCenter}
                key={`${mapCenter.lat}-${mapCenter.lon}`}
            />
        </div>
    );
}
