import { styled } from "styled-components";
import {
    ModalBackground,
    flexSpaceBetweenCenter,
} from "../../../styles/common";

export const ConfirmContainer = styled.div`
    ${ModalBackground}
`;
export const Confirm = styled.div`
    width: 300px;
    background-color: ${({ theme }) => theme.PALETTE.white};
    margin: 20rem auto;
    border-radius: 1rem;
`;

export const ConfirmTitle = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    text-align: center;
    padding: 1.2rem;
`;

export const ConfirmContents = styled.div`
    width: 300px;
    border-top: ${({ theme }) => theme.PALETTE.gray[200]} 1px solid;
    padding: 1.2rem;
    p {
        font-size: ${({ theme }) => theme.FONT_SIZE.md};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
    }
`;

export const ButtonDiv = styled.div`
    ${flexSpaceBetweenCenter}
    padding: 0.5rem;
    * {
        margin: 0.3rem;
    }
`;
