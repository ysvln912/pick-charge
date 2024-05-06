import styled from "styled-components";

export const ChargerStaitionDetail = styled.div`
    background-color: ${({ theme }) => theme.PALETTE.white};
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 2rem auto;
    width: 90%;
    height: 800px;
    overflow-y: auto;
`;
export const CloseButton = styled.button`
    background-color: ${({ theme }) => theme.PALETTE.white};
    cursor : pointer;
    float : right;
    font-size: ${({ theme }) => theme.FONT_SIZE.lg};
`;
export const ChargerDetail = styled.div`
    margin: 0.3rem 0.5rem;
    display: flex;
    align-items: center;
`;

export const DetailRole = styled.div`
    display: flex;
`;

export const DetailTitle = styled.p`
    margin: 0.6rem 0.3rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.lg};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.PALETTE.black};
`;

export const DetailLocation = styled.p`
    margin: 0.3rem;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
    color: ${({ theme }) => theme.PALETTE.gray[400]};
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;
export const TypeContainer = styled.div`
    margin: 1rem 0.3rem;
`;
export const DetailType = styled.span`
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
    border-radius: 0.2rem;
    padding: 0.2rem;
    margin: 0 0.3rem;
    color: ${({ theme }) => theme.PALETTE.gray[400]};
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
`;

export const StatusContainer = styled.div`
    margin: 0.3rem;
    display: flex;

    p {
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        margin: 0 0.5rem;
    }
`;
