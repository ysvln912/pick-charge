import styled from "styled-components";

export const ToastContainer = styled.div<{ isShow: boolean }>`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 70px;
  width: 370px;

  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: opacity 0.2s ease;
`;
