import styled from "styled-components";
import { flexAlignCenter, flexColumn } from "@/styles/common";

export const Container = styled.section`
  padding-bottom: 68px;
`;

export const Main = styled.main`
  padding: 24px;
  padding-top: 80px;
  ${flexColumn};
  gap: 16px;
`;

export const AddressBox = styled.div`
  position: relative;
  padding-bottom: 16px;
`;

export const SearchResultsBox = styled.div`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
  background-color: ${({ theme }) => theme.PALETTE.white};
  ${flexColumn};
  position: absolute;
  width: 100%;
  top: 80px;
  left: 0;
  z-index: 1;
`;

export const ChargingSpeed = styled.div`
  ${flexColumn};
  padding: 8px 0;
`;

export const SpeedInputTag = styled.div`
  ${flexAlignCenter};
`;
