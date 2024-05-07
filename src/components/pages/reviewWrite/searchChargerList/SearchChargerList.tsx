/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "./SearchChargerList.style";

import { useState, useEffect } from "react";

import { useAtom } from "jotai";
import { reviewAtom } from "@/atoms/reviewAtom";

import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";
import SearchChargerListInput from "./input/SearchChargerListInput";
import { ChargerStation } from "@/types/charger";
import chargerApi from "@/apis/charger";

export default function SearchChargerList() {
  const [, setReview] = useAtom(reviewAtom);
  const [chargerList, setChargerList] = useState<ChargerStation[]>([]);
  const [show, setShow] = useState(false);
  const [chargerInfo, setChargerInfo] = useState({
    road_address_name: "",
    address_name: "",
    keyword: "",
  });

  const getChargerList = async () => {
    try {
      const response = await chargerApi.getChargerlist(
        chargerInfo.road_address_name
      );
      setChargerList(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChargerList();
  }, [chargerInfo]);

  const updateSearchItem = (name: string, location: string) => {
    setChargerInfo((info) => ({
      ...info,
      keyword: name,
      address_name: name,
      road_address_name: location,
    }));
    setShow(false);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleChargerClick = (chargerId: number, chargerName: string) => {
    setReview((prev) => ({
      ...prev,
      chargerName: chargerName,
      chargerId: chargerId,
    }));
    handleGoBack();
  };

  return (
    <>
      <SearchChargerListInput
        chargerInfo={chargerInfo}
        setChargerInfo={setChargerInfo}
        show={show}
        setShow={setShow}
        onChange={updateSearchItem}
      />
      <S.List>
        {chargerList?.map((chargerStation: ChargerStation) => {
          return chargerStation.chargers.map((charger) => {
            return (
              <ChargingInfo
                key={charger.chargerId}
                info={charger}
                like={false}
                tag={true}
                border="bottom"
                onClick={() =>
                  handleChargerClick(charger.chargerId, charger.chargerName)
                }
              />
            );
          });
        })}
      </S.List>
    </>
  );
}
