import styled from "styled-components";

export const SearchContainer = styled.div`
    position: absolute;
    padding: 1.5rem;
    width: 100%;
    z-index: 2;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 90px;
    padding: 0 8rem;
    z-index: 2;
    p {
        color: ${({ theme }) => theme.PALETTE.gray[400]};
    }
    svg {
        width : 20px;
        height : 20px;
        margin-right: 0.5rem;
    }
`;
