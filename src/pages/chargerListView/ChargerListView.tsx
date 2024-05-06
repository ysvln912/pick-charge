import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./ChargerListView.style";
import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";
import Button from "@/components/common/button/Button";
import SolidMapIcon from "@/components/common/icons/SolidMapIcon";
import { SearchInfo } from "../chargerMapView/ChargerMapView";
import ChargerSearch from "@/components/pages/charger/ChargerSearch";
import { ChargerStation } from "@/types/charger";
import chargerApi from "@/apis/charger";
import { useToggle } from "@/hooks/useToggle";
import ChargerStationSummary from "@/components/pages/charger/chargerStationSummary/ChargerStationSummary";
import ChargerListDetail from "@/components/pages/charger/ChargerListDetail";

export default function ChargerListView() {
    const navigate = useNavigate();
    const [stationId, setStationId] = useState(-1);
    const { open, close, isOpen } = useToggle(false);
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

    async function fetchChargerList() {
        if (searchInfo.address.location) {
            try {
                const chargerList = await chargerApi.getChargerlist(
                    searchInfo.address.location
                );
                setChargerInfo(chargerList.slice(0, 30));
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        fetchChargerList();
    }, [searchInfo]);

    console.log(chargerInfo);
    return (
        <S.ChargerContainer>
            <ChargerSearch
                searchInfo={searchInfo}
                searchInfoHandler={searchInfoHandler}
                viewtype="list"
            />
            <S.listContainer>
                {chargerInfo.map((chargerStation) => {
                    return (
                        <div
                            key={chargerStation.chargerStationId}
                            onClick={() => {
                                setStationId(chargerStation.chargerStationId);
                            }}>
                            <ChargerStationSummary
                                chargerStation={chargerStation}
                                open={open}
                            />
                        </div>
                    );
                })}
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
