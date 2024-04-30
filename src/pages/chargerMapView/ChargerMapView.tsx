import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./ChargerMapView.style";
import { Charger } from "@/components/common/chargingInfo/ChargingInfo";
import ChargerMap from "@/components/pages/charger/chargerMap/ChargerMap";
import SearchInput from "@/components/common/searchInput/SearchInput";
import Button from "@/components/common/button/Button";
import ListIcon from "@/components/common/icons/ListIcon";
import { ISearchResult } from "../registerCharger/RegisterCharger";
import { useDebounce } from "@/hooks/useDebounce";
import { searchAddress } from "@/apis/kakaoSearchAddress";
import SearchResultItem from "@/components/pages/registerCharger/SearchResultItem";

interface SearchInfo {
    address: {
        name: string;
        location: string;
        latitude: number;
        longitude: number;
    };
    keyword: string;
}

export default function ChargerMapView() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [chargerInfo, setChargerInfo] = useState<SearchInfo>({
        address: {
            name: "",
            location: "",
            latitude: 0,
            longitude: 0,
        },
        keyword: "",
    });
    const debouncedKeyword = useDebounce(chargerInfo.keyword);
    const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

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
            avg_rate: "4.5",
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
            avg_rate: "3.8",
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
            avg_rate: "4.2",
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
            avg_rate: "4.0",
            company_name: "편의차지 주식회사",
            member_price: 8,
            nonmember_price: 12,
            personal_price: 10,
            charger_type: "AC3상",
            charger_role: "공공",
        },
    ];

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        if (name === "keyword") {
            setShow(true);
        }
        setChargerInfo((info) => ({ ...info, [name]: value }));
    };

    const updateSearchItem = (name: string, location: string) => {
        //주소로 좌표 구하기 추가
        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();
        var coords: { lat: number; lon: number } = { lat: 0, lon: 0 };

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
            location,
            function (result: any, status: string) {
                // 정상적으로 검색이 완료됐으면
                if (status === window.kakao.maps.services.Status.OK) {
                    coords = { lat: Number(result[0].y), lon: Number(result[0].x) };
                    console.log(`coords : ${coords.lat}, ${coords.lon}`);
                    setChargerInfo((info) => ({
                        ...info,
                        keyword: name,
                        address: {
                            name,
                            location,
                            latitude: coords.lat,
                            longitude: coords.lon,
                        },
                    }));
                    setShow(false);
                    console.log("지도 센터 이동");
                } else {
                    console.log("위도/경도를 구할 수 없습니다.");
                }
            }
        );
    };

    console.log(chargerInfo);
    useEffect(() => {
        searchAddress(debouncedKeyword, setSearchResults);
    }, [debouncedKeyword]);

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도

                var locPosition = new window.kakao.maps.LatLng(lat, lon);
                // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            });
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            console.log("geolocation을 사용할수 없어요..");
        }
    }, []);

    return (
        <div>
            <S.SearchContainer>
                <SearchInput
                    placeholder="충전소를 검색해보세요"
                    onChange={updateInput}
                    value={chargerInfo.keyword}
                    name="keyword"
                />
                {show && searchResults.length > 0 && (
                    <S.SearchResultsBox>
                        {searchResults.map((result) => (
                            <SearchResultItem
                                key={result.id}
                                {...result}
                                onClick={updateSearchItem}
                            />
                        ))}
                    </S.SearchResultsBox>
                )}
            </S.SearchContainer>
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
            <ChargerMap info={sampleData} />
        </div>
    );
}
