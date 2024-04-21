import { styled } from "styled-components";
import { bodyContainer, flexSpaceBetweenCenter } from "../../../styles/common";

export const BottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 2.5rem;
  padding: 1.5rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.es};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
  border-top: ${({ theme }) => theme.PALETTE.gray[100]} 1px solid;
  color: ${({ theme }) => theme.PALETTE.gray[400]};
  path {
    fill: ${({ theme }) => theme.PALETTE.gray[400]};
  }
  * {
    padding: 0.1rem;
    text-align: center;
  }
  .active {
    color: ${({ theme }) => theme.PALETTE.mainColor};
    path {
      fill: ${({ theme }) => theme.PALETTE.mainColor};
    }
  }
  ${flexSpaceBetweenCenter}
  ${bodyContainer}
`;
