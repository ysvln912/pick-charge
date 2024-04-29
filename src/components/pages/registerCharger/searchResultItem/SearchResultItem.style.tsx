import styled from "styled-components";

export const Item = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
  }
`;

export const Top = styled.div`
  margin-bottom: 4px;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  margin-right: 8px;
`;

export const Category = styled.span`
  color: ${({ theme }) => theme.PALETTE.gray[300]};
  font-size: ${({ theme }) => theme.FONT_SIZE.es};
`;

export const Address = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`;
