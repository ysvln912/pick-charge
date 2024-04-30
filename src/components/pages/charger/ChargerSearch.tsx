import React, { useState, useEffect } from "react";

import * as S from "./ChargerSearch.style";
import SearchInput from "@/components/common/searchInput/SearchInput";
import SearchResultItem from "../registerCharger/SearchResultItem";
import { ISearchResult } from "@/pages/registerCharger/RegisterCharger";
import { SearchInfo } from "@/pages/chargerMapView/ChargerMapView";
import { useDebounce } from "@/hooks/useDebounce";
import { searchAddress } from "@/apis/kakaoSearchAddress";

interface ChargerSearchProps {
    chargerInfo: SearchInfo;
    setChargerInfo: React.Dispatch<React.SetStateAction<SearchInfo>>;
}

export default function ChargerSearch({
    chargerInfo,
    setChargerInfo,
}: ChargerSearchProps) {
    const [show, setShow] = useState(false);
    const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

    const debouncedKeyword = useDebounce(chargerInfo.keyword);

    useEffect(() => {
        searchAddress(debouncedKeyword, setSearchResults);
    }, [debouncedKeyword]);

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        if (name === "keyword") {
            setShow(true);
        }
        setChargerInfo((info) => ({ ...info, [name]: value }));
    };

    const updateSearchItem = (name: string, location: string) => {
        setChargerInfo((info) => ({
            ...info,
            keyword: name,
            address: {
                ...info.address,
                name,
                location,
            },
        }));
        setShow(false);
    };

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
