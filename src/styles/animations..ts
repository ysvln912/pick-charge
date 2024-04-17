import { keyframes } from "styled-components";

export const fadeInUp = keyframes`
  0% {
      opacity: 0;
      transform: translate(-50%, 100%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0%);
    }
`;
