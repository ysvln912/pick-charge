import styled from "styled-components";



export const ChargingTitle = styled.div`
    display: flex;
    margin: 0.8rem;
    p {
        font-size: ${({ theme }) => theme.FONT_SIZE.md};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }
`;

export const ChargingAddress = styled.div`
    margin: 0.8rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
    color: ${({ theme }) => theme.PALETTE.gray[300]};
`;

export const ChargingStatus = styled.div`
    margin: 0.8rem;
    display: flex;
    color: #fdb022;
    path {
        fill: #fdb022;
    }
    .type {
        color: ${({ theme }) => theme.PALETTE.black};
    }

`;
