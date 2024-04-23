import styled from "styled-components";
import { ErrorMessageProps } from "./ErrorMessage";

export const ErrorMessage = styled.p<ErrorMessageProps>`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  color: ${({ theme }) => theme.PALETTE.error};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;
