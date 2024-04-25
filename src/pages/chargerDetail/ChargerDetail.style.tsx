import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 1rem;
    margin: 0.5rem 0;
    background-color: ${({ theme }) => theme.PALETTE.white};
`;

export const ChargerContainer = styled.div`
    width: 390px;
    height: 100vh;
    margin-top: 56px;
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
`;

export const ChargerOverview = styled(StyledDiv)`
    .company .address {
        margin: 0.3rem;
        font-size: ${({ theme }) => theme.FONT_SIZE.sm};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
        color: ${({ theme }) => theme.PALETTE.gray[400]};
    }
    .status {
        display: flex;
    }
    .address {
        font-size: ${({ theme }) => theme.FONT_SIZE.md};
    }
`;

export const ChargerInfo = styled(StyledDiv)``;

export const ChargerPrice = styled(StyledDiv)``;

export const ChargerReview = styled(StyledDiv)`
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
