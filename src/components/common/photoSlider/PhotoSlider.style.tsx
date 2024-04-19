import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 342px;
  height: 156px;
  overflow: hidden;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.gray[200]};
  border-radius: 10px;
  overflow: hidden;
`;

export const Img = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: contain;
`;

export const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.PALETTE.white};
  z-index: 10;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrevBtn = styled(Btn)`
  left: 5px;
`;

export const NextBtn = styled(Btn)`
  right: 5px;
`;
