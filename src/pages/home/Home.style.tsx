import { styled } from "styled-components";
import { flexColumn } from "@/styles/common";

export const HomeContainer = styled.div`
    & img {
        padding: 1rem 1.5rem;
    }
`;
export const SearchDiv = styled.div`
    padding: 1.2rem;
    background-color: ${({ theme }) => theme.PALETTE.primary[100]};
    font-size: ${({ theme }) => theme.FONT_SIZE.lg};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    & span {
        color: ${({ theme }) => theme.PALETTE.mainColor};
    }
    & p {
        margin-bottom: 0.5rem;
    }
`;

export const MenuDiv = styled.div`
    ${flexColumn}
    padding : 0.5rem;
`;

export const MenuRow = styled.div`
    display: flex;
    .menuColumn {
        flex-basis: 43%;
    }
    .menuList {
        flex-basis: 57%;
    }
`;

export const FavoritesCharger = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    & p {
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        font-size: ${({ theme }) => theme.FONT_SIZE.lg};
    }
    & a {
        color: ${({ theme }) => theme.PALETTE.gray[300]};
        font-size: ${({ theme }) => theme.FONT_SIZE.sm};
        display: flex;
        flex-direction: row;
        align-items: center;
        svg {
            margin-left: 0.4rem;
        }
        path {
            fill: ${({ theme }) => theme.PALETTE.gray[300]};
        }
    }
`;

export const EmptyFavorite = styled.div`
    color: ${({ theme }) => theme.PALETTE.gray[400]};
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
    padding : 4rem;
    text-align : center;
`;
