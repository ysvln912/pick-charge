import styled from "styled-components";

export const RoleContainer = styled.div`
    border-radius : 0.4rem;
    padding : 0.35rem;
    margin : 0.2rem;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    &.public {
        border: ${({ theme }) => theme.PALETTE.mainColor} 0.1rem solid;
        color : ${({ theme }) => theme.PALETTE.mainColor};
    }
    &.individual {
        background-color : ${({ theme }) => theme.PALETTE.mainColor};
        color : ${({ theme }) => theme.PALETTE.white};

    }
`