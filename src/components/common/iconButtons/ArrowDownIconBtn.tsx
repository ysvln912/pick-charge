import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import ArrowDownIcon from "../icons/ArrowDownIcon";

export default function ArrowDownIconBtn({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...rest}>
      <ArrowDownIcon />
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
`;
