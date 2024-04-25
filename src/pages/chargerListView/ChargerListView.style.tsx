import styled from "styled-components";



export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 90px;
    padding: 0 8rem;
    & button {
        border-radius: 100px;
    }
    path {
        fill : ${({ theme }) => theme.PALETTE.white}
    }
    svg {
        width : 20px;
        height : 20px;
        margin-right: 0.5rem;
    }
`;

