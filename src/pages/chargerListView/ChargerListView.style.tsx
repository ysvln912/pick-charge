import styled from "styled-components";

export const ChargerContainer = styled.div`
    height: 100%;
`;

export const HistoryContainer = styled.div`
    margin: 0.8rem;
`;

export const listContainer = styled.div`
    margin-top: 45px;
`;

export const HistoryTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    p {
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        font-size: ${({ theme }) => theme.FONT_SIZE.lg};
    }
    button {
        background-color: ${({ theme }) => theme.PALETTE.white};
        color: ${({ theme }) => theme.PALETTE.gray[400]};
        cursor: pointer;
    }
`;

export const SearchHistory = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0.1rem 0.5rem;
`;

export const HistoryItem = styled.li`
    background-color: ${({ theme }) => theme.PALETTE.primary[100]};
    width: fit-content;
    border-radius: 1rem;
    margin: 0.3rem;
    padding: 0.1rem 0.5rem;
`;
export const HistoryKeyword = styled.span`
    cursor: pointer;
    color: ${({ theme }) => theme.PALETTE.mainColor};
`;
export const RemoveButton = styled.button`
    color: ${({ theme }) => theme.PALETTE.gray[200]};
    background-color: ${({ theme }) => theme.PALETTE.primary[100]};
    cursor: pointer;
    margin: 0.3rem;
`;
export const ButtonContainer = styled.div`
    position: fixed;
    bottom: 90px;
    padding: 0 8rem;
    & button {
        border-radius: 100px;
    }
    path {
        fill: ${({ theme }) => theme.PALETTE.white};
    }
    svg {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
    }
`;
