import styled from "styled-components";

export const UserInfoContainer = styled.div`
    width: 390px;
    height: 844px;
    margin-top: 56px;
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
`;

export const InfoContainer = styled.div`
    padding: 1.5rem;
    margin: 0.5rem 0;
    background-color: ${({ theme }) => theme.PALETTE.white};
    height: 640px;
`;

export const ProfileContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    img {
        width: 100%;
        height: 100%;
    }
    label {
        position: absolute;
        bottom: 10px;
        right: 15px;
        background-color: transparent;
        cursor: pointer;
        svg {
            width: 35px;
            height: 35px;
        }
    }
    input[type="file"] {
        display: none;
    }
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

export const InputContainer = styled.div`
    label {
        margin: 0.3rem;
        margin-top: 1.5rem;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
        font-size: ${({ theme }) => theme.FONT_SIZE.md};
    }
`;

export const EditContainer = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        width : 90%;
    }
    button {
        align-self: end;
        
    }
    
`;

export const AccountOptionsDiv = styled.div`
    position: absolute;
    width: 390px;
    height: 130px;
    padding: 1.5rem;
    bottom: 68px;
    background-color: ${({ theme }) => theme.PALETTE.white};
    display: flex;
    justify-content: flex-start;
    p {
        color: ${({ theme }) => theme.PALETTE.gray[200]};
        cursor: pointer;
    }
    svg {
        margin: 0 1rem;
        width: 3px;
        height: 20px;
    }
    path {
        stroke: ${({ theme }) => theme.PALETTE.gray[300]};
    }
`;
