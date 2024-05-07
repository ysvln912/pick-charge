import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./ChargerListView.style";
import Button from "@/components/common/button/Button";
import SolidMapIcon from "@/components/common/icons/SolidMapIcon";
import { MapCenter, SearchInfo } from "../chargerMapView/ChargerMapView";
import ChargerSearch from "@/components/pages/charger/ChargerSearch";
import { ChargerStation } from "@/types/charger";
import { useToggle } from "@/hooks/useToggle";
import ChargerStationSummary from "@/components/pages/charger/chargerStationSummary/ChargerStationSummary";
import ChargerListDetail from "@/components/pages/charger/ChargerListDetail";
import { useChargerList } from "@/hooks/queries/charger";

export default function ChargerListView() {
    const navigate = useNavigate();
    const [stationId, setStationId] = useState(-1);
    const { open, close, isOpen } = useToggle(false);
    const [location, setLocation] = useState("");
    const [showRec, setShowRec] = useState(false);
    const [queries, setQueries] = useState(
        JSON.parse(localStorage.getItem("queries") || "[]")
    );
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
    const searchInfoHandler: React.Dispatch<
        React.SetStateAction<SearchInfo>
    > = (updatedInfo) => {
        setSearchInfo(updatedInfo);
    };

    const [chargerInfo, setChargerInfo] = useState<ChargerStation[]>([]);

    const { data, isLoading, isError } = useChargerList(location);

    useEffect(() => {
        if (!isLoading && !isError) {
            setChargerInfo(data);
        }
    }, [data, isLoading, isError]);

    useEffect(() => {
        setShowRec(false);
        setLocation(searchInfo.address.location);
    }, [searchInfo]);

    useEffect(() => {
        if (searchInfo.address.location) {
            const newQuery = {
                id: Date.now(),
                location: searchInfo.address.location,
                name: searchInfo.address.name,
            };
            const curQueries = queries.filter((word: any) => {
                return newQuery.name !== word.name;
            });
            setQueries([newQuery, ...curQueries]);
        }
    }, [location]);

    useEffect(() => {
        //array 타입을 string형태로 바꾸기 위해 json.stringfy를 사용한다.
        localStorage.setItem("queries", JSON.stringify(queries));
    }, [queries]);
    
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

    useEffect(() => {
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.coord2Address(
            mapCenter.lon,
            mapCenter.lat,
            async function (result: any, status: string) {
                if (status === window.kakao.maps.services.Status.OK) {
                    const detailAddr = !!result[0].road_address
                        ? result[0].road_address.address_name
                        : result[0].address.address_name;
                    setLocation(detailAddr);
                    setShowRec(true);
                }
            }
        );
    }, [mapCenter]);

    return (
        <S.ChargerContainer>
            <ChargerSearch
                searchInfo={searchInfo}
                searchInfoHandler={searchInfoHandler}
                viewtype="list"
            />

            <S.listContainer>
                {showRec ? (
                    <div>
                        <S.HistoryContainer>
                            <S.HistoryTitle>
                                <p>최근 검색어</p>
                                <button
                                    onClick={() => {
                                        setQueries([]);
                                    }}>
                                    전체 삭제
                                </button>
                            </S.HistoryTitle>
                            <S.SearchHistory>
                                {queries.length === 0 ? (
                                    <>최근 검색된 기록이 없습니다.</>
                                ) : (
                                    queries.map((query: any) => {
                                        return (
                                            <S.HistoryItem key={query.id}>
                                                <S.HistoryKeyword
                                                    onClick={() => {
                                                        console.log(
                                                            query.location
                                                        );
                                                    }}>
                                                    {query.name}
                                                </S.HistoryKeyword>
                                                <S.RemoveButton
                                                    onClick={() => {
                                                        const nextQueries =
                                                            queries.filter(
                                                                (
                                                                    thisQuery: any
                                                                ) => {
                                                                    return (
                                                                        thisQuery.id !=
                                                                        query.id
                                                                    );
                                                                }
                                                            );
                                                        setQueries(nextQueries);
                                                    }}>
                                                    X
                                                </S.RemoveButton>
                                            </S.HistoryItem>
                                        );
                                    })
                                )}
                            </S.SearchHistory>
                        </S.HistoryContainer>
                        <div>내 근처 충전소</div>
                        {chargerInfo?.slice(0, 5).map((chargerStation) => {
                            return (
                                <div
                                    key={chargerStation.chargerGroupId}
                                    onClick={() => {
                                        setStationId(
                                            chargerStation.chargerGroupId - 1
                                        );
                                    }}>
                                    <ChargerStationSummary
                                        viewstyle="list"
                                        chargerStation={chargerStation}
                                        open={open}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <>
                        {chargerInfo?.map((chargerStation) => {
                            return (
                                <div
                                    key={chargerStation.chargerGroupId}
                                    onClick={() => {
                                        setStationId(
                                            chargerStation.chargerGroupId - 1
                                        );
                                    }}>
                                    <ChargerStationSummary
                                        viewstyle="list"
                                        chargerStation={chargerStation}
                                        open={open}
                                    />
                                </div>
                            );
                        })}
                    </>
                )}
                {isOpen && chargerInfo[stationId] && (
                    <ChargerListDetail
                        chargers={chargerInfo[stationId].chargers}
                        close={close}
                        open={isOpen}
                    />
                )}
            </S.listContainer>

            <S.ButtonContainer>
                <Button
                    size="md"
                    category="normal"
                    onClick={() => {
                        navigate("/charger/map");
                    }}>
                    <SolidMapIcon />
                    지도보기
                </Button>
            </S.ButtonContainer>
        </S.ChargerContainer>
    );
}
