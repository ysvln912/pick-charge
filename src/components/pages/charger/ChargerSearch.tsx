import React, { useState, useEffect } from "react";

import * as S from "./ChargerSearch.style";
import SearchInput from "@/components/common/searchInput/SearchInput";
import SearchResultItem from "../registerCharger/searchResultItem/SearchResultItem";
import { ISearchResult } from "@/pages/registerCharger/RegisterCharger";
import { SearchInfo } from "@/pages/chargerMapView/ChargerMapView";
import { useDebounce } from "@/hooks/useDebounce";
import { searchAddress } from "@/apis/kakaoSearchAddress";
import Input from "@/components/common/input/input";
import LeftIcon from "@/components/common/icons/LeftIcon";
import { ViewStyle } from "@/types";

interface ChargerSearchProps {
  searchInfo: SearchInfo;
  searchInfoHandler: React.Dispatch<React.SetStateAction<SearchInfo>>;
  viewtype?: ViewStyle;
}

export default function ChargerSearch({
  searchInfo,
  searchInfoHandler,
  viewtype = "map",
}: ChargerSearchProps) {
  const [show, setShow] = useState(false);
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

  const debouncedKeyword = useDebounce(searchInfo.keyword);

  useEffect(() => {
    searchAddress(debouncedKeyword, setSearchResults);
  }, [debouncedKeyword]);

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === "keyword") {
      setShow(true);
    }
    searchInfoHandler((prevState) => ({ ...prevState, [name]: value }));
  };

  const updateSearchItem = (name: string, location: string) => {
    searchInfoHandler((prevState) => ({
      ...prevState,
      keyword: name,
      address: {
        ...prevState.address,
        name,
        location,
      },
    }));
    setShow(false);
  };

  return (
    <S.SearchContainer viewstyle={viewtype}>
      {viewtype === "map" ? (
        <SearchInput
          placeholder="충전소를 검색해보세요"
          onChange={updateInput}
          value={searchInfo.keyword}
          name="keyword"
        />
      ) : (
        <Input>
          <Input.Base>
            <Input.Left>
              <LeftIcon />
            </Input.Left>
            <Input.Center
              placeholder="충전소를 검색해 보세요."
              onChange={updateInput}
              value={searchInfo.keyword}
              name="keyword"
            />
          </Input.Base>
        </Input>
      )}

      {show && searchResults.length > 0 && (
        <S.SearchResultsBox viewstyle={viewtype}>
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
