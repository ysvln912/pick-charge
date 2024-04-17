import styled, { css } from "styled-components";
import { ObjMap } from "../button/Button";

const LAYOUT: ObjMap = {
  start: css`
    justify-content: flex-start;
  `,
  center: css`
    justify-content: center;
  `,
  between: css`
    justify-content: space-between;
  `,
  startCenter: css`
    justify-content: center;
    svg {
      position: absolute;
      left: 20px;
      top: 20px;
    }
  `,
};

export const Container = styled.div<{ layout: string }>`
  width: 390px;
  height: 56px;
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 999;
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  color: ${({ theme }) => theme.PALETTE.black};
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-bottom: 0.5px solid ${({ theme }) => theme.PALETTE.gray[100]};
  display: flex;
  align-items: center;
  ${({ layout }) => layout && LAYOUT[layout]};
`;
