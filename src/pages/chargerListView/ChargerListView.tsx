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
    const [seaerchInfo, setSearchInfo] = useState<SearchInfo>({
        address: {
            name: "",
            location: "",
            latitude: 0,
            longitude: 0,
        },
        keyword: "",
    });
    const [chargerInfo, setChargerInfo] = useState<ChargerStation[]>([]);

    useEffect(() => {
        if (seaerchInfo.address.location) {
            console.log(`api 요청 : /chargers?location=${seaerchInfo.address.location}`);
            chargerApi
                .getChargerlist(seaerchInfo.address.location)
                .then((res: ChargerStation[]) => {
                    setChargerInfo(res.slice(0,30));
                })
                .catch((err: any) => {
                    console.log(err);
                });
        }
    }, [seaerchInfo]);

    console.log(chargerInfo)
    return (
        <S.ChargerContainer>
            <ChargerSearch
                chargerInfo={seaerchInfo}
                setChargerInfo={setSearchInfo}
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
