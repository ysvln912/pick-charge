import styled, { css } from "styled-components";

const MAP_TYPE = {
    full: css`
        top: 0;
        height: 100vh;
    `,
    half: css`
        top: 56px;
        height: 50vh;
    `,
};

export const MapContainer = styled.div<{ type: "full" | "half" }>`
    position: absolute;
    left: 0;
    width: 390px;
    z-index: 1;
    ${({ type }) => MAP_TYPE[type]}
`;

export const ChargerStaitionDetail = styled.div`
    position: absolute;
    width: 390px;
    bottom: 68px;
    background-color: ${({ theme }) => theme.PALETTE.white};
    z-index: 2;
    padding: 1rem;
`;

export const DetailTitle = styled.p`
    margin: 0.6rem 0.3rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.lg};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.PALETTE.black};
`;

export const DetailLocation = styled.p`
    margin: 0.3rem;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
    color: ${({ theme }) => theme.PALETTE.gray[400]};
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;
