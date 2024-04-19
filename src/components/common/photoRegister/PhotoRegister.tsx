import React from "react";
import styled from "styled-components";
import PlusIcon from "../icons/PlusIcon";

export interface PhotoRegisterProps {
  photos: File[];
  updatePhotos: React.Dispatch<React.SetStateAction<File[]>>;
}

export default function PhotoRegister({
  photos,
  updatePhotos,
}: PhotoRegisterProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (!files) {
      return;
    }
    files[0] && updatePhotos((prev) => [...prev, files[0]]);
  };

  const onRemove = (index: number) => {
    const copyPhotos = [...photos];
    copyPhotos.splice(index, 1);
    updatePhotos([...copyPhotos]);
  };

  return (
    <Container>
      <TitleLabel htmlFor="file">사진</TitleLabel>
      <Description>사진은 최대 4장까지 등록할 수 있어요.</Description>
      <FilesBox>
        {photos.map((photo, index) => {
          return (
            <ImgBox key={index}>
              <RemoveBtn onClick={() => onRemove(index)}>
                <PlusIcon />
              </RemoveBtn>
              <PreviewImg
                src={URL.createObjectURL(photo)}
                alt="image preview"
              />
            </ImgBox>
          );
        })}
        {photos.length < 4 && (
          <FileLabel htmlFor="file">
            <PlusIcon />
            <FileInput
              type="file"
              id="file"
              accept="image/*"
              onChange={onChange}
            />
          </FileLabel>
        )}
      </FilesBox>
    </Container>
  );
}

const Container = styled.div`
  width: 342px;
  height: 147px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleLabel = styled.label`
  color: ${({ theme }) => theme.PALETTE.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.PALETTE.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.es};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

const FilesBox = styled.div`
  width: 100%;
  height: 98px;
  background-color: ${({ theme }) => theme.PALETTE.gray[100]};
  border-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
`;

const FileLabel = styled.label`
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

const FileInput = styled.input`
  display: none;
`;

const ImgBox = styled.div`
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

const PreviewImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const RemoveBtn = styled.button`
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
