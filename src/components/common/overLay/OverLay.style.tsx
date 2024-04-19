import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 390px;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
