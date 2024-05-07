import styled, { css } from "styled-components";
import { flexSpaceBetweenCenter } from "@/styles/common";

export const SelectContainer = styled.div<{
  disabled: boolean;
  error: string | boolean;
}>`
  cursor: pointer;
  width: 100%;
  padding: 0.875rem 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};

  ${({ error, theme }) =>
    error &&
    css`
      border: 1px solid ${theme.PALETTE.mainColor};
    `}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.PALETTE.gray[50]};
      color: ${theme.PALETTE.gray[100]};
      cursor: auto;
    `}
`;

export const SelectContentBox = styled.div`
  ${flexSpaceBetweenCenter}
`;

export const SelectContentText = styled.p<{ disabled: boolean }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.gray[400]};

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.PALETTE.gray[200]};
    `}
`;

export const OptionList = styled.ul`
  margin: 1.5rem 0;
`;

export const OptionItem = styled.li`
  button {
    cursor: pointer;
    padding: 0.75rem 0;
    width: 100%;
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    text-align: left;
    background-color: transparent;
    &:hover {
      color: ${({ theme }) => theme.PALETTE.mainColor};
    }
  }
`;

export const Title = styled.p`
  text-align: center;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;
