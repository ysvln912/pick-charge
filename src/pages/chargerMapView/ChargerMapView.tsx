import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./ChargerMapView.style";
import ChargerMap from "@/components/pages/charger/chargerMap/ChargerMap";
import Button from "@/components/common/button/Button";
import ListIcon from "@/components/common/icons/ListIcon";
import ChargerSearch from "@/components/pages/charger/ChargerSearch";
import { ChargerStation } from "@/types/charger";
import chargerApi from "@/apis/charger";

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

export default function ChargerMapView() {
    const navigate = useNavigate();
    const [mapCenter, setMapCenter] = useState<MapCenter>({
        lat: 0,
        lon: 0,
    });

    const [searchInfo, setSearchInfo] = useState<SearchInfo>({
        address: {
            name: "",
            location: "",
            latitude: 0,
            longitude: 0,
        },
        keyword: "",
    });

    const [chargerInfo, setChargerInfo] = useState<ChargerStation[]>([]);

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
        if (searchInfo.address.location) {
            var geocoder = new window.kakao.maps.services.Geocoder();
            var coords: { lat: number; lon: number } = { lat: 0, lon: 0 };

            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(
                searchInfo.address.location,
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
    }, [searchInfo]);

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

                    chargerApi
                        .getChargerlist(detailAddr)
                        .then((res: ChargerStation[]) => {
                            setChargerInfo(res);
                            console.log(res.length)
                        })
                        .catch((err: any) => {
                            console.log(err);
                        });
                }
            }
        );
    }, [mapCenter]);

    return (
        <div>
            <ChargerSearch
                chargerInfo={searchInfo}
                setChargerInfo={setSearchInfo}
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
                info={chargerInfo}
                mapCenter={mapCenter}
                setMapCenter={setMapCenter}
                key={`${mapCenter.lat}-${mapCenter.lon}`}
            />
        </div>
    );
}
