import styled from "styled-components";
import { ModalBackground } from "@/styles/common";
import { fadeInUp } from "@/styles/animations.";

export const Background = styled.div`
  ${ModalBackground}
`;

export const Container = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme.PALETTE.white};
  padding: 1.5rem;

  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);
  transform: translate(-50%, 0%);

  animation: ${fadeInUp} 0.5s;
`;
