import styled from "styled-components";

export const ChargingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.7rem;
    margin: 0.8rem;

    & .iconDiv {
        margin: 0.5rem;
    }
    ${({ theme }) => {
        return `
            &.full {
                border: ${theme.PALETTE.gray[200]} 0.1rem solid;
                border-radius: 1rem;
            }
            &.bottom {
                border-bottom: ${theme.PALETTE.gray[200]} 0.1rem solid;
                }
        `;

    }}
`;

export const ChargingContent = styled.div`
    display: flex;
    & .chargingTitle {
        margin: 0.5rem;
        font-size: ${({ theme }) => theme.FONT_SIZE.md};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }
    & .starDiv {
        margin: 0.5rem;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.PALETTE.black};
        font-size: ${({ theme }) => theme.FONT_SIZE.sm};
        svg {
            width: 1.4rem;
        }
        path {
            fill: ${({ theme }) => theme.PALETTE.mainColor};
        }
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
    font-size: ${({ theme }) => theme.FONT_SIZE.xs};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    .type {
        color: ${({ theme }) => theme.PALETTE.black};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
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
