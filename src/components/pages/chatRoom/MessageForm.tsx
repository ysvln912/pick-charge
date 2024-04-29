import { flexAlignCenter } from "@/styles/common";
import React from "react";
import styled from "styled-components";

export default function MessageForm() {
  return (
    <Form>
      <Input type="text" placeholder="메시지 보내기" />
      <SubmitButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
        >
          <path d="M0 16V10L8 8L0 6V0L19 8L0 16Z" fill="#D9D9D9" />
        </svg>
      </SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
  ${flexAlignCenter};
  padding: 16px 24px;
  width: 100%;
  max-width: 390px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 68px;
`;

const Input = styled.input`
  flex: 1;
  border-radius: 20px;
  padding: 8px 16px;
  height: 32px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.PALETTE.gray[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.black};
  &::placeholder {
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
    color: ${({ theme }) => theme.PALETTE.gray[400]};
  }
`;

const SubmitButton = styled.button`
  margin-left: 8px;
  cursor: pointer;
  background-color: transparent;
  height: 32px;
`;
