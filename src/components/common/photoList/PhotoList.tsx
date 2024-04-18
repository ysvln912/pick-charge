import React from "react";
import styled from "styled-components";
import PhotoCard from "../photoCard/PhotoCard";

export default function PhotoList({ imgs }: { imgs: string[] }) {
  return (
    <List>
      {imgs.map((img, index) => {
        return <PhotoCard key={index} url={img}></PhotoCard>;
      })}
    </List>
  );
}

const List = styled.div`
  width: fit-content;
  max-width: 342px;
  height: 98px;
  background-color: transparent;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
`;
