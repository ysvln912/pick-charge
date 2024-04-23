import React, { useEffect } from "react";
import { Charger } from "@/components/common/chargingInfo/ChargingInfo";
declare global {
    interface Window {
        kakao: any;
    }
}

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

    useEffect(() => {
        let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        let options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 5, //지도의 레벨(확대, 축소 정도)
        };

        let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도

                var locPosition = new window.kakao.maps.LatLng(lat, lon);
                // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

                map.setCenter(locPosition);
            });
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            console.log("geolocation을 사용할수 없어요..");
        }

        // 마커 이미지의 이미지 주소입니다
        var imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < sampleData.length; i++) {
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new window.kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다
            var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new window.kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new window.kakao.maps.LatLng(sampleData[i].latitude, sampleData[i].longitude), // 마커를 표시할 위치
                title: sampleData[i].charger_name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage, // 마커 이미지
            });
        }

    }, []);
    return (
        <div>
            <p>ChargingMap</p>
            <div id="map" style={{ width: "390px", height: "100vh" }} />
        </div>
    );
}
