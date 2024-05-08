import { flexColumn } from "@/styles/common";
import { ViewStyle } from "@/types";
import styled, { css } from "styled-components";

const ButtonView = {
    map: css`
        position: absolute;
        z-index: 2;
        p {
            color: ${({ theme }) => theme.PALETTE.gray[400]};
        }
    `,
    list: css`
        position: fixed;
        & button {
            border-radius: 100px;
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
    margin-top: 45px;
`;

export const ButtonContainer = styled.div<{ viewType: ViewStyle }>`
    ${({ viewType }) => ButtonView[viewType]}
    bottom: 90px;
    padding: 0 8rem;
    svg {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
    }
`;
