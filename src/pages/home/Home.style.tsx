import { styled } from "styled-components";
import { flexColumn } from "@/styles/common";
export const Test = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE.lg};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const MenuDiv = styled.div`
  ${flexColumn}
  padding : 0.5rem;
  & .div1 {
    display : flex;
  }
`
