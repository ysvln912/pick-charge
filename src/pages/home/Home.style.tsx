import { styled } from "styled-components";
import { flexColumn } from "@/styles/common";

export const HomeContainer = styled.div`
  & img {
    padding : 1rem 1.5rem;
  }
`
export const SearchDiv = styled.div`
  padding : 1.2rem;
  background-color : ${({ theme }) => theme.PALETTE.primary[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.lg};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  & span {
    color : ${({ theme }) => theme.PALETTE.mainColor};
  }
  & p {
    margin-bottom : 0.5rem;
  }
`;

export const MenuDiv = styled.div`
  ${flexColumn}
  padding : 0.5rem;
  & .div1 {
    display : flex;
  }
`
