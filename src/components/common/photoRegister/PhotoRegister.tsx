import React from "react";
import * as S from "./PhotoRegister.style";
import PlusIcon from "../icons/PlusIcon";

const MAX_NUM = 4;
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
    <S.Container>
      <div>
        <S.TitleLabel htmlFor="file">사진</S.TitleLabel>
        <S.Description>사진은 최대 4장까지 등록할 수 있어요.</S.Description>
      </div>
      <S.FilesBox>
        {photos.map((photo, index) => {
          return (
            <S.ImgBox key={index}>
              <S.RemoveBtn onClick={() => onRemove(index)}>
                <PlusIcon />
              </S.RemoveBtn>
              <S.PreviewImg
                src={URL.createObjectURL(photo)}
                alt="image preview"
              />
            </S.ImgBox>
          );
        })}
        {photos.length < MAX_NUM && (
          <S.FileLabel htmlFor="file">
            <PlusIcon />
            <S.FileInput
              type="file"
              id="file"
              accept="image/*"
              onChange={onChange}
            />
          </S.FileLabel>
        )}
      </S.FilesBox>
    </S.Container>
  );
}
