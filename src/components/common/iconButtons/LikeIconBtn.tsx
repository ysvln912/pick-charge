import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import LikeIcon from "../icons/LikeIcon";

export default function LikeIconBtn({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...rest}>
      <LikeIcon />
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
`;
