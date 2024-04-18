import styled from "styled-components";

export const ChargingContainer = styled.div`
    border: ${({ theme }) => theme.PALETTE.gray[200]} 0.1rem solid;
    padding: 0.7rem;
    margin: 0.8rem;
    border-radius: 1rem;
`;
export const ChargingContent = styled.div`
    display : flex;
    & .chargingTitle {
        margin: 0.5rem;
        font-size: ${({ theme }) => theme.FONT_SIZE.md};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }
`;

export const ChargingAddress = styled.div`
    margin: 0.5rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
    color: ${({ theme }) => theme.PALETTE.gray[300]};
`;

export const ChargingStatus = styled.div`
    margin: 0.5rem;
    display: flex;
    align-items: center;
    .type {
        color: ${({ theme }) => theme.PALETTE.black};
    }
    & p {
        margin-left: 0.4rem;
    }
    ${({ theme }) => {
        return `
            &.restriction {
                color: ${theme.PALETTE.gray[300]};
                path {
                    fill: ${theme.PALETTE.gray[300]};
                }
            }
            &.available {
                color: ${theme.PALETTE.yellow};
                path {
                    fill: ${theme.PALETTE.yellow};
                }
        `;
    }}


`;
