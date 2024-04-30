import { flexSpaceBetweenCenter } from "@/styles/common";
import styled from "styled-components";

export const Container = styled.div`
    margin-top: 76px;
`;

export const UserInfo = styled.div`
    margin: 3.5rem 1rem;
    .info-container {
        display: flex;
        align-items: center;
    }
    .info-content {
        margin-left: 1rem;
    }
    .user-name {
        font-size: ${({ theme }) => theme.FONT_SIZE.lg};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        color: ${({ theme }) => theme.PALETTE.black};
    }
    .user-email {
        font-size: ${({ theme }) => theme.FONT_SIZE.md};
        color: ${({ theme }) => theme.PALETTE.gray[300]};
    }
    .info-link {
        margin: 1rem;
        padding: 0.8rem;
        border-radius: 0.4rem;
        border: 0.1rem solid ${({ theme }) => theme.PALETTE.gray[100]};
        font-size: ${({ theme }) => theme.FONT_SIZE.md};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        color: ${({ theme }) => theme.PALETTE.black};
        text-align: center;
        cursor: pointer;
    }
`;

export const MenuTitle = styled.p`
    margin: 1rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.PALETTE.gray[400]};
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
        width: 15px;
        height: 15px;
        margin-right: 0.4rem;
    }
    path {
        fill: ${({ theme }) => theme.PALETTE.gray[400]};
    }
`;

export const UserMenu = styled.div`
    margin: 1rem;
    border-radius: 0.4rem;
    border: 0.1rem solid ${({ theme }) => theme.PALETTE.gray[100]};
    hr {
        width: 95%;
        margin: 0 auto;
        background: ${({ theme }) => theme.PALETTE.gray[100]};
        height: 0.1rem;
        border: 0;
    }
    p {
        ${flexSpaceBetweenCenter}
        padding : 1rem;
        display: flex;
    }
`;
