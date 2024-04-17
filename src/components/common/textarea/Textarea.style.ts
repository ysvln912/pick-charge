import styled from "styled-components";
import { TextareaProps } from "./Textarea";

export const Textarea = styled.textarea<TextareaProps>`
  width: 100%;
  min-height: 11.87rem;
  resize: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
  color: ${({ theme }) => theme.PALETTE.gray[400]};
  padding: 0.81rem 0.75rem;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.PALETTE.mainColor};
  }
  &::placeholder {
    color: ${({ theme }) => theme.PALETTE.gray[200]};
  }
`;
