import { styled } from "styled-components";

export const Container = styled.div`
  width: 342px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleLabel = styled.label`
  color: ${({ theme }) => theme.PALETTE.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;

export const Description = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.PALETTE.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

export const FilesBox = styled.div`
  width: 100%;
  height: 98px;
  background-color: ${({ theme }) => theme.PALETTE.gray[100]};
  border-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
`;

export const FileLabel = styled.label`
  cursor: pointer;
  width: 65px;
  height: 65px;
  border-radius: 5px;
  border: 1px dotted ${({ theme }) => theme.PALETTE.gray[200]};
  background-color: ${({ theme }) => theme.PALETTE.white};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const FileInput = styled.input`
  display: none;
`;

export const ImgBox = styled.div`
  width: 65px;
  height: 65px;
  margin-right: 17px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.black};
    button {
      display: block;
    }
    img {
      opacity: 0.4;
    }
  }
`;

export const PreviewImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const RemoveBtn = styled.button`
  display: none;
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: transparent;
  border: none;
  outline: none;
  width: 16px;
  height: 16px;
  z-index: 1;
  border-radius: 50%;
  transform: rotate(45deg);
  cursor: pointer;
`;
