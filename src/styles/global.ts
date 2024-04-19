import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { bodyContainer } from "./common";
import PretendardRegular from "@/assets/fonts/Pretendard-Regular.otf";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url(${PretendardRegular}) format('opentype');
        font-weight: 400;
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
        margin: 0 auto;
        position: relative;
        background-color: ${({ theme }) => theme.PALETTE.gray[100]};
    }

    #root{
        min-height: 100vh;
        background-color: ${({ theme }) => theme.PALETTE.white};
    }

    button {
        border: none;
    }

    li {
        list-style: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
