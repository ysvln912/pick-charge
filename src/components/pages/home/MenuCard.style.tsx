import styled from "styled-components";

export const MenuContainer = styled.div`
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
    border-radius: 1rem;
    padding: 1rem;
    margin: 0.5rem;
`;

export const MenuTitle = styled.p`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    color: ${({ theme }) => theme.PALETTE.black};
`;

export const Menudesc = styled.p`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
    font-size: ${({ theme }) => theme.FONT_SIZE.es};
    color: ${({ theme }) => theme.PALETTE.gray[300]};
`;
