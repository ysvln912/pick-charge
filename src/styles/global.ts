import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { bodyContainer } from "./common";
import PretendardRegular from "@/assets/fonts/Pretendard-Regular.otf";
import PretendardMedium from "@/assets/fonts/Pretendard-Medium.otf";
import PretendardBold from "@/assets/fonts/Pretendard-Bold.otf";
import PretendardLight from "@/assets/fonts/Pretendard-Light.otf";

const GlobalStyles = createGlobalStyle`
  @font-face {
        font-family: 'Pretendard';
        src: url(${PretendardLight}) format('opentype');
        font-weight: 100;
        font-display: swap; 
    }

    @font-face {
        font-family: 'Pretendard';
        src: url(${PretendardRegular}) format('opentype');
        font-weight: 400;
        font-display: swap; 
    }

    @font-face {
        font-family: 'Pretendard';
        src: url(${PretendardMedium}) format('opentype');
        font-weight: 500;
        font-display: swap; 
    }

    @font-face {
        font-family: 'Pretendard';
        src: url(${PretendardBold}) format('opentype');
        font-weight: 700;
        font-display: swap; 
    }

    ${reset}

    * {
        font-family: 'Pretendard';
        letter-spacing : -0.3px;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Pretendard';
        letter-spacing : -0.3px;
        ${bodyContainer};
        position: relative;
        background-color: ${({ theme }) => theme.PALETTE.gray[100]};
    }

    #root{
        overflow: auto;
        min-height: 100vh;
        background-color: ${({ theme }) => theme.PALETTE.white};
    }

    button {
        border: none;
    }

    li {
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    ::-webkit-scrollbar {
    /* width: 10px; */
    /* background-color: ${({ theme }) => theme.PALETTE.gray[100]}; */
    display: none;
  }
/* 
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.PALETTE.gray[300]};
    border-radius: 10px;

    background-clip: padding-box;
    border: 2px solid transparent;
    max-height: 40px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
    border-radius: 10px;
  } */
`;

export default GlobalStyles;
