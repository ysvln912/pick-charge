import { styled } from "styled-components";
import { ModalBackground } from "../../../styles/common";

export const ConfirmContainer = styled.div`
    ${ModalBackground}
`;
export const Confirm = styled.div`
    width: 300px;
    background-color :${({ theme }) => theme.PALETTE.white};
    height: 13vh;
    margin: 20rem auto;
    padding: 2rem;
    border-radius: 1rem;
`;

export const ConfirmContents = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    text-align : center;

`;

export const ButtonDiv = styled.div`
    text-align : center;
    padding : 1rem;
    * {
        margin : 1rem;
        background-color :${({ theme }) => theme.PALETTE.white};
    }

`
