import styled from "styled-components";
import { flexAlignCenter } from "@/styles/common";

export const Container = styled.div`
  ${flexAlignCenter}
  height: 25px;
  margin-right: 8px;
`;

export const FakeRadioButton = styled.label<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid
    ${(props) =>
      props.checked
        ? props.theme.PALETTE.mainColor
        : props.theme.PALETTE.gray[200]};
  position: relative;
  cursor: pointer;
  &::before {
    display: ${({ checked }) => (checked ? "block" : "none")};
    content: "";
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.PALETTE.mainColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  margin: 0 4px;
`;
