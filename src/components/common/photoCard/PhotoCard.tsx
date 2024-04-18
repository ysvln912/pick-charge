import React from "react";
import styled from "styled-components";

export default function PhotoCard({ url }: { url: string }) {
  return (
    <Card>
      <Img src={url} alt="image" />
    </Card>
  );
}

const Card = styled.div`
  width: 65px;
  height: 65px;
  margin-right: 17px;
  border-radius: 5px;
  &:last-child {
    margin-right: 0;
  }
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.PALETTE.white};
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
