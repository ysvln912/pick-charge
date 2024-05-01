/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./SearchChargerInput.style";

import { ChangeEvent, useState } from "react";
import SearchInput, {
  SearchInputProps,
} from "@/components/common/searchInput/SearchInput";
import SearchResultItem from "../../registerCharger/searchResultItem/SearchResultItem";

interface SearchChargerInputProps extends SearchInputProps {
  error: string | boolean;
  onChange: (e: any) => void;
}

export default function SearchChargerInput({
  error = false,
  onChange,
}: SearchChargerInputProps) {
  const [show, setShow] = useState(false);
  const [chargerInfo, setChargerInfo] = useState({
    road_address_name: "",
    address_name: "",
    keyword: "",
  });

  // const handleUpdateSearchItem = (name: string, location: string) => {
  //   const address = { name, location };
  //   // setChargerInfo(address);
  //   setShow(false);
  // 서버에 chargerId 보내야하나?
  //   // onChange && onChange(chargerId);
  // };

  const handleUpdateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === "keyword") {
      setShow(true);
    }
    setChargerInfo((info) => ({ ...info, [name]: value }));
  };

  console.log({ show, chargerInfo });
  return (
    <>
      <SearchInput
        require
        name="keyword"
        placeholder="주소를 입력해 주세요."
        label="충전소"
        onChange={handleUpdateInput}
        error={error}
        value={chargerInfo.keyword}
      />
      {/* {show && <SearchResultItem onClick={handleUpdateSearchItem} />} */}
    </>
  );
}
