import React, { useState, useEffect } from "react";

import * as S from "./ChargerSearch.style";
import SearchInput from "@/components/common/searchInput/SearchInput";
import SearchResultItem from "../registerCharger/SearchResultItem";
import { ISearchResult } from "@/pages/registerCharger/RegisterCharger";
import { useDebounce } from "@/hooks/useDebounce";
import { searchAddress } from "@/apis/kakaoSearchAddress";

interface SearchInfo {
    address: {
        name: string;
        location: string;
        latitude: number;
        longitude: number;
    };
    keyword: string;
}

interface ChargerSearchProps {
    center: { lat: number; lon: number };
    setCenter: (center: { lat: number; lon: number }) => void;
}

export default function ChargerSearch({ center, setCenter }: ChargerSearchProps) {
    const [show, setShow] = useState(false);
    const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
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
                    coords = {
                        lat: Number(result[0].y),
                        lon: Number(result[0].x),
                    };
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
                } else {
                    console.log("위도/경도를 구할 수 없습니다.");
                }
            }
        );
    };

    useEffect(() => {
        searchAddress(debouncedKeyword, setSearchResults);
    }, [debouncedKeyword]);

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도

                setCenter({
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
        setCenter({
            lat: chargerInfo.address.latitude,
            lon: chargerInfo.address.longitude,
        });
    }, [chargerInfo]);

    return (
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
    );
}
