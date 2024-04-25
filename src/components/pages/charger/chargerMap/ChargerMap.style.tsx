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
