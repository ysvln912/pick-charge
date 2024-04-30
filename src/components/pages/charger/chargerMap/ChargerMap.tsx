import React, { useEffect } from "react";

import * as S from "./ChargerMap.style";
import { Charger } from "@/components/common/chargingInfo/ChargingInfo";
declare global {
    interface Window {
        kakao: any;
    }
}

export interface ChargerProps {
    info: Charger[];
    type?: "full" | "half";
    center : {
        lat : number;
        lon : number
    }
}

export default function ChargerMap({ info, type = "full", center }: ChargerProps) {
    useEffect(() => {
        let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        let options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(center.lat, center.lon), //지도의 중심좌표.
            level: 4, //지도의 레벨(확대, 축소 정도)
        };

        let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, "dragend", function () {
            // 지도 중심좌표를 얻어옵니다
            var latlng = map.getCenter();

            var message =
                "변경된 지도 중심좌표는 " + latlng.getLat() + " 이고, ";
            message += "경도는 " + latlng.getLng() + " 입니다";

            console.log(message);
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
        }
    }, []);
    return <S.MapContainer id="map" type={type} />;
}
