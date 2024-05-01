import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as S from "./ChargerMap.style";
import { Charger } from "@/components/common/chargingInfo/ChargingInfo";
import { MapCenter } from "@/pages/chargerMapView/ChargerMapView";
import ChargingRoleCard from "@/components/common/chargingRoleCard/ChargingRoleCard";
import RatingWithStar from "@/components/common/ratingWithStar/RatingWithStar";
import ChargerStatus from "@/components/common/chargerStatus/ChargerStatus";
import FastChargerIcon from "@/components/common/icons/FastChargerIcon";
import SlowChargerIcon from "@/components/common/icons/SlowChargerIcon";

declare global {
    interface Window {
        kakao: any;
    }
}

export interface ChargerProps {
    info: Charger[];
    type?: "full" | "half";
    mapCenter: MapCenter;
    setMapCenter: React.Dispatch<React.SetStateAction<MapCenter>>;
}

export default function ChargerMap({
    info,
    type = "full",
    mapCenter,
    setMapCenter,
}: ChargerProps) {
    const [isDetailOpen, setDetailOpen] = useState(false);
    const [detailId, setDetailId] = useState(-1);

    function markerClickHandler(i: number) {
        setDetailOpen(true);
        setDetailId(i - 1);
    }

    function mapClickHandler() {
        setDetailOpen(false);
        setDetailId(-1);
    }

    useEffect(() => {
        let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        let options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lon), //지도의 중심좌표.
            level: 4, //지도의 레벨(확대, 축소 정도)
        };

        let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, "dragend", function () {
            // 지도 중심좌표를 얻어옵니다
            var latlng = map.getCenter();
            setMapCenter({ lat: latlng.getLat(), lon: latlng.getLng() });
        });

        // 마커 이미지의 이미지 주소입니다
        var imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < info.length; i++) {
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new window.kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다
            var markerImage = new window.kakao.maps.MarkerImage(
                imageSrc,
                imageSize
            );

            // 마커를 생성합니다
            var marker = new window.kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new window.kakao.maps.LatLng(
                    info[i].latitude,
                    info[i].longitude
                ), // 마커를 표시할 위치
                title: info[i].charger_name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage, // 마커 이미지
            });

            window.kakao.maps.event.addListener(marker, "click", () =>
                markerClickHandler(i)
            );
            window.kakao.maps.event.addListener(map, "click", () =>
                mapClickHandler()
            );
        }
    }, []);

    return (
        <>
            <S.MapContainer id="map" type={type} />
            {isDetailOpen && info[detailId] && (
                <Link to={`/charger/${info[detailId].id}`}>
                    <S.ChargerDetail>
                        <S.DetailStatus>
                            <ChargingRoleCard
                                role={info[detailId].charger_role}
                            />
                            <RatingWithStar rating={info[detailId].avg_rate} />
                        </S.DetailStatus>
                        <S.DetailTitle>
                            {info[detailId].charger_name}
                        </S.DetailTitle>
                        <S.DetailLocation>
                            {info[detailId].charger_location}
                        </S.DetailLocation>
                        <S.TypeContainer>
                            <S.DetailType>
                                {info[detailId].charger_type}
                            </S.DetailType>
                            <S.DetailType>
                                DC 콤보
                            </S.DetailType>
                        </S.TypeContainer>

                        <S.StatusContainer>
                            {info[detailId].charging_speed === "급속" ? (
                                <FastChargerIcon />
                            ) : (
                                <SlowChargerIcon />
                            )}
                            <p>{info[detailId].charging_speed}</p>
                            <ChargerStatus status={info[detailId].status} />
                        </S.StatusContainer>
                    </S.ChargerDetail>
                </Link>
            )}
        </>
    );
}
