import React, { useState, useEffect } from "react";

import * as S from "./ChargerMap.style";
import { ChargerStation } from "@/types/charger";
import { MapCenter } from "@/pages/chargerMapView/ChargerMapView";
import marker_individual from "@/assets/imgs/marker_individual.png";
import marker_public from "@/assets/imgs/marker_public.png";
import ChargerListDetail from "../ChargerListDetail";
import { useToggle } from "@/hooks/useToggle";

declare global {
    interface Window {
        kakao: any;
    }
}

export interface ChargerProps {
    info: ChargerStation[];
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
    const [isStationOpen, setStationOpen] = useState(false);
    const [stationId, setStationId] = useState(-1);
    const { open, close, isOpen } = useToggle(false);

    function markerClickHandler(i: number) {
        setStationOpen(true);
        setStationId(i - 1);
    }

    function mapClickHandler() {
        setStationOpen(false);
        setStationId(-1);
    }

    useEffect(() => {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lon), //지도의 중심좌표.
            level: 4, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, "dragend", function () {
            // 지도 중심좌표를 얻어옵니다
            let latlng = map.getCenter();
            setMapCenter({ lat: latlng.getLat(), lon: latlng.getLng() });
        });

        for (let i = 0; i < info.length; i++) {
            const imageSrc =
                info[i].chargers[0].chargerRole === "개인"
                    ? marker_individual
                    : marker_public;

            const imageSize = new window.kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다
            const markerImage = new window.kakao.maps.MarkerImage(
                imageSrc,
                imageSize
            );

            // 마커를 생성합니다
            const marker = new window.kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new window.kakao.maps.LatLng(
                    info[i].chargers[0].latitude,
                    info[i].chargers[0].longitude
                ), // 마커를 표시할 위치
                title: info[i].chargerName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
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
            {isStationOpen && info[stationId] && (
                <S.ChargerStaitionDetail onClick={open}>
                    <S.DetailTitle>{info[stationId].chargerName}</S.DetailTitle>
                    <S.DetailLocation>
                        {info[stationId].chargerLocation}
                    </S.DetailLocation>
                    <S.DetailLocation>
                        {info[stationId].chargers.length}개의 충전기가 있습니다.
                    </S.DetailLocation>
                </S.ChargerStaitionDetail>
            )}
            {isOpen && (
                <ChargerListDetail
                    chargers={info[stationId].chargers}
                    close={close}
                    open={isOpen}
                />
            )}
        </>
    );
}
