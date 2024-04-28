import { ISearchResult } from "@/pages/registerCharger/RegisterCharger";
import React from "react";
import styled from "styled-components";

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
    <Item onClick={handleClick}>
      <Top>
        <Name>{place_name}</Name>
        <Category>{category_name.split(">").pop()?.trim()}</Category>
      </Top>
      <Address>{road_address_name || address_name}</Address>
    </Item>
  );
}

const Item = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
  }
`;

const Top = styled.div`
  margin-bottom: 4px;
`;

const Name = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  margin-right: 8px;
`;

const Category = styled.span`
  color: ${({ theme }) => theme.PALETTE.gray[300]};
  font-size: ${({ theme }) => theme.FONT_SIZE.es};
`;

const Address = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`;
