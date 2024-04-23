import styled, { css } from "styled-components";
import {
    ModalBackground,
    flexSpaceBetweenCenter,
} from "../../../styles/common";

const confirmType = {
    dialog: css`
        padding-bottom: 1rem;
        border-bottom: ${({ theme }) => theme.PALETTE.gray[200]} 1px solid;
    `,
    confirm: css`
        padding: 1.2rem;
    `,
};

export const ConfirmContainer = styled.div`
    ${ModalBackground}
`;
export const Confirm = styled.div`
    width: 300px;
    background-color: ${({ theme }) => theme.PALETTE.white};
    margin: 20rem auto;
    border-radius: 1rem;
    padding-top: 1.2rem;
`;

export const ConfirmTitle = styled.div<{ type: "confirm" | "dialog" }>`
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    text-align: center;
    ${({ type }) => confirmType[type]}
`;

export const ConfirmContents = styled.div`
    border: ${({ theme }) => theme.PALETTE.black} 1rem soild;
    padding: 1.5rem;
`;

export const ButtonDiv = styled.div`
    ${flexSpaceBetweenCenter}
    padding: 0.5rem;

    * {
        margin: 0.3rem;
    }
`;
