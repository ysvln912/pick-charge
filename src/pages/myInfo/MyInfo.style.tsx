import styled from "styled-components";

export const UserInfoContainer = styled.div`
    width: 390px;
    height: 100vh;
    margin-top: 56px;
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
`;

export const InfoContainer = styled.div`
    padding: 1.5rem;
    margin: 0.5rem 0;
    height: 75vh;
    background-color: ${({ theme }) => theme.PALETTE.white};
`;

export const ProfileContainer = styled.div`
    text-align: center;
`;

export const ProfileInfoContainer = styled.div`
    margin: 1rem;
    P {
        text-align: center;
        margin: 0.5rem;
    }
`;
export const NicknamePara = styled.p`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    font-size: ${({ theme }) => theme.FONT_SIZE.lg};
    color: ${({ theme }) => theme.PALETTE.black};
`;
export const EmailPara = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    color: ${({ theme }) => theme.PALETTE.gray[300]};
`;

export const EditContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AccountOptionsDiv = styled.div`
    margin: 0.5rem 0;
    padding: 1.5rem;
    height: 25vh;
    background-color: ${({ theme }) => theme.PALETTE.white};
    display : flex;
    justify-content: flex-start;
    p {
        color: ${({ theme }) => theme.PALETTE.gray[200]};
    }
    svg {
        margin: 0 1rem;
        width: 3px;
        height: 20px;
    }
    path {
        stroke : ${({ theme }) => theme.PALETTE.gray[300]};
    }
`;
