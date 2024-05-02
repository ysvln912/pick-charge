import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./ChargerListView.style";
import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";
import Button from "@/components/common/button/Button";
import SolidMapIcon from "@/components/common/icons/SolidMapIcon";
import { SearchInfo } from "../chargerMapView/ChargerMapView";
import ChargerSearch from "@/components/pages/charger/ChargerSearch";
import { ChargerStation } from "@/types/charger";
import chargerApi from "@/apis/charger";

export default function ChargerListView() {
    const navigate = useNavigate();
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
            console.log(`api 요청 : ${seaerchInfo.address.location}`);
            chargerApi
                .getChargerlist(seaerchInfo.address.location)
                .then((res: ChargerStation[]) => {
                    setChargerInfo(res);
                })
                .catch((err: any) => {
                    console.log(err);
                });
        }
    }, [seaerchInfo]);

    return (
        <S.ChargerContainer>
            <ChargerSearch
                chargerInfo={seaerchInfo}
                setChargerInfo={setSearchInfo}
                viewtype="list"
            />
            <S.listContainer>
                {chargerInfo.length > 1 &&
                    chargerInfo.map((chargerStation) => {
                        return chargerStation.chargers.map((charger) => {
                            return (
                                <ChargingInfo
                                    key={charger.chargerId}
                                    info={charger}
                                    like={false}
                                    tag={true}
                                    border="bottom"
                                    onClick={() => {
                                        navigate(
                                            `/charger/${charger.chargerId}`
                                        );
                                    }}
                                />
                            );
                        });
                    })}
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
