import { ISearchResult } from "@/pages/registerCharger/RegisterCharger";
import * as S from "./SearchResultItem.style";

export interface ISearchResultItemProps extends ISearchResult {
  onClick: (name: string, address: string) => void;
}

export default function SearchResultItem({
  place_name,
  category_name,
  road_address_name,
  address_name,
  onClick,
}: ISearchResultItemProps) {
  const handleClick = () => {
    const name = place_name;
    const address = road_address_name || address_name;
    onClick(name, address);
  };

  return (
    <S.Item onClick={handleClick}>
      <S.Top>
        <S.Name>{place_name}</S.Name>
        <S.Category>{category_name.split(">").pop()?.trim()}</S.Category>
      </S.Top>
      <S.Address>{road_address_name || address_name}</S.Address>
    </S.Item>
  );
}
