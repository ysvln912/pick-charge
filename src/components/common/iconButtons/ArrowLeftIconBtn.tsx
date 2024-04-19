import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

export default function ArrowLeftIconBtn({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...rest}>
      <ArrowLeftIcon />
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
