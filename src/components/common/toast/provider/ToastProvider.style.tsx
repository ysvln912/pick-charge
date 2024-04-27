import styled from "styled-components";

export const ToastContainer = styled.div<{ isShow: boolean }>`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 70px;
  width: 370px;
  z-index: 9999;

  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: opacity 0.5s ease;
`;
