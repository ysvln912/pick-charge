import * as S from "./MyFavorites.style";
import { useState, useEffect } from "react";

import LikeIcon from "@/components/common/icons/LikeIcon";
// import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import IconButton from "@/components/common/iconButton/IconButton";
import ChargerMap from "@/components/pages/charger/chargerMap/ChargerMap";
import { MapCenter } from "../chargerMapView/ChargerMapView";
import { ChargerStation } from "@/types";

const data: ChargerStation[] = [
    {
        chargerGroupId: 1,
        chargerLocation: "서울시 강남구",
        chargerName: "강남 충전소",
        chargers: [
            {
                chargerId: 101,
                chargerLocation: "서울시 강남구",
                chargerName: "강남 충전기 A",
                latitude: 37.123456,
                longitude: 127.123456,
                chargerTypeList: [
                    { id: 1, type: "DC 차데모" },
                    { id: 2, type: "AC 완속" }
                ],
                chargerRole: "public",
                avgRate: 4.5,
                chargerStatus: "available",
                chargingSpeed: "fast",
                content: "충전기 A 설명입니다.",
                memberPrice: 10000,
                nonmemberPrice: 15000,
                personalPrice: 12000,
                chargerImageList: [],
                reviewList: [],
                favorite: true
            },
        ]
    },
];

export default function MyFavorites() {
    const [mapCenter, setMapCenter] = useState<MapCenter>({
        lat: 0,
        lon: 0,
    });

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat = position.coords.latitude, // 위도
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

    return (
        <>
            <TopNavigationBar
                text="즐겨찾는 충전소"
                leftBtn={<IconButton icon={"arrowLeft"} />}
            />
            <S.Container>
                 <ChargerMap
                    info={data}
                    type="half"
                    mapCenter={mapCenter}
                    setMapCenter={setMapCenter}
                    key={`${mapCenter.lat}-${mapCenter.lon}`}
                /> 

                <S.Content>
                    <S.TitleWrapper>
                        <S.IconWrapper>
                            <LikeIcon />
                        </S.IconWrapper>
                        <S.Title>즐겨찾는 충전소</S.Title>
                    </S.TitleWrapper>

                    <S.FavoriteList>
                        <S.FavoriteItem>
                            {/* {data.map((data) => {
                                return (
                                    <ChargingInfo
                                        info={data}
                                        like={true}
                                        tag={true}
                                        border="bottom"
                                        onClick={() => {
                                            setMapCenter({
                                                lat: data.latitude,
                                                lon: data.longitude,
                                            });
                                        }}
                                    />
                                );
                            })} */}
                        </S.FavoriteItem>
                    </S.FavoriteList>
                </S.Content>
            </S.Container>
        </>
    );
}
