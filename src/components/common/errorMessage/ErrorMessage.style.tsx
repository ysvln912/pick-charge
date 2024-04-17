import styled from "styled-components";

export const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  color: ${({ theme }) => theme.PALETTE.error};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;
