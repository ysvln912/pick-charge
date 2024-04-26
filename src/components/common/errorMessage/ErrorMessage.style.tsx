import styled, { css } from "styled-components";
import { ErrorMessageProps } from "./ErrorMessage";

export const ErrorMessage = styled.p<ErrorMessageProps>`
  margin-top: 0.5rem;
  line-height: 1.3;
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  color: ${({ theme }) => theme.PALETTE.error};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};

  ${({ $visible }) =>
    $visible
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `};
`;
