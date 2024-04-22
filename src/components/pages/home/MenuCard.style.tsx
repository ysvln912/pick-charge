import styled, { css } from "styled-components";

const MENU_SHAPE = {
    fullRectangle: css``,
    halfSquare: css`
        height: 90%;
    `,
    halfRectangle: css`
    `,
};

export const MenuContainer = styled.div<{
    shape: "fullRectangle" | "halfSquare" | "halfRectangle";
}>`
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
    border-radius: 1rem;
    padding: 1rem;
    margin: 0.5rem;
    ${({ shape }) => MENU_SHAPE[shape]};
    color: ${({ theme }) => theme.PALETTE.black};
    path {
        fill : ${({ theme }) => theme.PALETTE.mainColor};
    }
`;

export const MenuTitle = styled.p`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
    margin: 0.5rem;
`;

export const Menudesc = styled.p`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
    font-size: ${({ theme }) => theme.FONT_SIZE.xs};
    margin: 0.5rem;
`;
