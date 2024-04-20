import styled from "styled-components";

export const Container = styled.div`
  min-width: 40px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.PALETTE.mainColor};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`;
