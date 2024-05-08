import styled from "styled-components";
import {
    flexAlignCenter,
    flexColumn,
    flexSpaceBetweenCenter,
} from "@/styles/common";

const StyledDiv = styled.div`
    padding: 1rem;
    margin-bottom: 0.5rem;
    background-color: ${({ theme }) => theme.PALETTE.white};
`;

export const ChargerContainer = styled.div`
    width: 390px;
    overflow-y: auto;
    margin-top: 56px;
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
`;

export const ChargerOverview = styled(StyledDiv)``;

export const ChargerCompany = styled.div`
    margin: 0.3rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
    color: ${({ theme }) => theme.PALETTE.gray[400]};
`;

export const ChargerAddress = styled.div`
    margin: 0.3rem;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
    color: ${({ theme }) => theme.PALETTE.gray[400]};
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

export const ChargerStatus = styled.div`
    display: flex;
`;

export const ChargerInfo = styled(StyledDiv)`
    table {
        width: 350px;
        margin: 1rem auto;
        table-layout: fixed;
        border-collapse: collapse;
        border-radius: 10px;
        border-style: hidden;
        box-shadow: 0 0 0 1px ${({ theme }) => theme.PALETTE.gray[200]};
    }
    tr {
        border: solid 1px ${({ theme }) => theme.PALETTE.gray[200]};
    }
    th {
        padding: 0.5rem;
        color: ${({ theme }) => theme.PALETTE.gray[400]};
        font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    }
    td {
        padding: 1rem;
        text-align: center;
        div {
            justify-content: center;
        }
        svg {
            width: 18px;
            height: 18px;
            margin-right: 0.3rem;
        }
    }
`;

export const ChargerPrice = styled(StyledDiv)`
    p {
        margin: 1rem auto;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }
`;

export const PriceInfo = styled.div`
    ${flexSpaceBetweenCenter}
    margin: 1rem auto;
    .row {
        font-size: ${({ theme }) => theme.FONT_SIZE.md};
        div {
            margin: 0.7rem;
        }
    }
    .charging-speed {
        width: 40%;
        font-size: ${({ theme }) => theme.FONT_SIZE.md};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        color: ${({ theme }) => theme.PALETTE.black};
    }
    .price-member {
        color: ${({ theme }) => theme.PALETTE.mainColor};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }
    .price-rate span {
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }
    .price-rate div {
        font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    }
`;
export const StationInfo = styled(StyledDiv)``;

export const StationContent = styled.div`
    div {
        margin: 0 auto;
    }
    p {
        margin: 1rem;
    }
`;

export const ChargerReview = styled.div`
    padding: 1rem;
    background-color: ${({ theme }) => theme.PALETTE.white};
    height: 240px;
    .reviewTitle {
        display: flex;
        justify-content: space-between;
    }
    & a {
        color: ${({ theme }) => theme.PALETTE.mainColor};
        font-size: ${({ theme }) => theme.FONT_SIZE.sm};
        display: flex;
        flex-direction: row;
        align-items: center;
        svg {
            margin-left: 0.4rem;
        }
        path {
            fill: ${({ theme }) => theme.PALETTE.mainColor};
        }
    }
`;

export const Title = styled.p`
    margin: 0.6rem 0.3rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.lg};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.PALETTE.black};
`;

export const ButtomList = styled.ul`
    ${flexColumn}
    gap: .5rem;
    margin-bottom: 1.5rem;
`;

export const ButtomItem = styled.li`
    cursor: pointer;
    ${flexAlignCenter}
    gap: 1rem;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    padding: 3px;
    border-radius: 5px;
    transition: all ease 0.3s;
    &:hover {
        background-color: ${({ theme }) => theme.PALETTE.gray[100]};
    }
    svg {
        width: 15px;
        height: 15px;
    }
    path {
        fill: ${({ theme }) => theme.PALETTE.black};
    }
`;

export const EmptyReview = styled.div`
    margin-top: 1.5rem;
    text-align: center;
    color: ${({ theme }) => theme.PALETTE.gray[400]};
    p {
        margin: 1rem;
    }
`;

export const SubTitle = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
