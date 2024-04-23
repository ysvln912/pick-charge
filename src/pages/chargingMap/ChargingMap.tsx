import React, { useEffect } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

export default function ChargingMap() {
    useEffect(() => {
        let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        let options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3, //지도의 레벨(확대, 축소 정도)
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
    }, []);
    return (
        <div>
            <p>ChargingMap</p>
            <div id="map" style={{ width: "390px", height: "100vh" }} />
        </div>
    );
}

