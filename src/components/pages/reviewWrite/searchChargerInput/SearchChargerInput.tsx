/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./SearchChargerInput.style";

import { ChangeEvent, useState, useEffect } from "react";

import { searchAddress } from "@/apis/kakaoSearchAddress";
import SearchInput, {
  SearchInputProps,
} from "@/components/common/searchInput/SearchInput";
import SearchResultItem from "../../registerCharger/searchResultItem/SearchResultItem";
import { ISearchResult } from "@/types/myCharger";
import { useDebounce } from "@/hooks/useDebounce";
interface SearchChargerInputProps extends SearchInputProps {
  error: string | boolean;
  onChange: (e: any) => void;
}

export default function SearchChargerInput({
  error = false,
}: SearchChargerInputProps) {
  const [show, setShow] = useState(false);
  const [chargerInfo, setChargerInfo] = useState({
    road_address_name: "",
    address_name: "",
    keyword: "",
  });
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

  const debouncedKeyword = useDebounce(chargerInfo.keyword);

  // const handleUpdateSearchItem = (name: string, location: string) => {
  //   const address = { name, location };
  //   // setChargerInfo(address);
  //   setShow(false);
  // 서버에 chargerId 보내야하나?
  //   // onChange && onChange(chargerId);
  // };

  useEffect(() => {
    searchAddress(debouncedKeyword, setSearchResults);
  }, [debouncedKeyword]);

  const handleUpdateInput = (event: ChangeEvent<HTMLInputElement>) => {
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
      address: { name, location },
    }));
    setShow(false);
  };

  return (
    <S.Wrapper>
      <SearchInput
        require
        name="keyword"
        placeholder="주소를 입력해 주세요."
        label="충전소"
        onChange={handleUpdateInput}
        error={error}
        value={chargerInfo.keyword}
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
    </S.Wrapper>
  );
}
