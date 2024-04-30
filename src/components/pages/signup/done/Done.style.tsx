import { styled } from "styled-components";
import { flexColumn } from "@/styles/common";

export const Container = styled.div`
  ${flexColumn}
`;

export const ImageWrapper = styled.div`
  margin-bottom: 3rem;
  img {
    margin: auto;
    display: block;
  }
`;

export const Content = styled.div`
  margin-bottom: 1.5rem;
  h3 {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    font-size: 30px;
    color: ${({ theme }) => theme.PALETTE.mainColor};
    margin-bottom: 1rem;
  }

  p {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
    margin-bottom: 4px;
  }
`;
