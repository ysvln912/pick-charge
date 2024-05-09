import { ViewStyle } from "@/types";
import styled, { css } from "styled-components";

const ButtonView = {
  map: css`
    position: absolute;
    z-index: 2;
    & button {
      border-radius: 100px;
      width: 125px;
    }

    p {
      color: ${({ theme }) => theme.PALETTE.gray[400]};
    }
  `,
  list: css`
    position: fixed;

    & button {
      border-radius: 100px;
      width: 125px;
    }
    path {
      fill: ${({ theme }) => theme.PALETTE.white};
    }
  `,
};

export const ChargerContainer = styled.div`
  height: 100%;
`;

export const listViewContainer = styled.div`
  margin: 45px 0 110px;
`;

export const ButtonContainer = styled.div<{ viewType: ViewStyle }>`
  ${({ viewType }) => ButtonView[viewType]}
  bottom: 90px;
  width: 390px;
  button {
    margin: auto;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
`;
