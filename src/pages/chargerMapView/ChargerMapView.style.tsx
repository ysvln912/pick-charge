import styled from "styled-components";
import { flexColumn } from "@/styles/common";

export const SearchContainer = styled.div`
    position: absolute;
    padding: 1.5rem;
    width: 100%;
    z-index: 2;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 90px;
    padding: 0 8rem;
    z-index: 2;
    p {
        color: ${({ theme }) => theme.PALETTE.gray[400]};
    }
    svg {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
    }
`;

export const SearchResultsBox = styled.div`
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
    background-color: ${({ theme }) => theme.PALETTE.white};
    ${flexColumn};
    position: absolute;
    width: 87.5%;
    top: 70px;
    z-index: 2;
`;
