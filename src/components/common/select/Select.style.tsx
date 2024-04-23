import styled from "styled-components";
import { flexSpaceBetweenCenter } from "@/styles/common";

export const SelectContainer = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 0.875rem 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const SelectContentBox = styled.div`
  ${flexSpaceBetweenCenter}
`;

export const SelectContentText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.gray[400]};
`;

export const OptionList = styled.ul`
  margin: 1.5rem 0;
`;

export const OptionItem = styled.li`
  padding: 0.75rem 0;
  cursor: pointer;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

  &:hover {
    color: ${({ theme }) => theme.PALETTE.mainColor};
  }
`;

export const Title = styled.p`
  text-align: center;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;
