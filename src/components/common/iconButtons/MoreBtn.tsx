import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import MoreIcon from "../icons/MoreIcon";

export default function MoreIconBtn({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...rest}>
      <MoreIcon />
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
`;
