import { styled } from "styled-components";
import { flexColumn } from "@/styles/common";

export const Form = styled.form`
  ${flexColumn}
  gap: 1rem;
`;

export const TextWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
  p {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
    font-size: ${({ theme }) => theme.FONT_SIZE.xs};
    color: ${({ theme }) => theme.PALETTE.gray[400]};
    span {
      cursor: pointer;
      margin-left: 8px;
      color: ${({ theme }) => theme.PALETTE.mainColor};
    }
  }
`;
