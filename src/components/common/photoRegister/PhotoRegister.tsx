import React from "react";
import * as S from "./PhotoRegister.style";
import PlusIcon from "../icons/PlusIcon";
import DeleteIcon from "../icons/DeleteIcon";

const MAX_NUM = 4;
export interface PhotoRegisterProps {
  photos: File[];
  updatePhoto: (photo: File) => void;
  deletePhoto: (photos: File[]) => void;
}

export default function PhotoRegister({
  photos,
  updatePhoto,
  deletePhoto,
}: PhotoRegisterProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (!files) {
      return;
    }
    files[0] && updatePhoto(files[0]);
  };

  const onRemove = (index: number) => {
    const copyPhotos = [...photos];
    copyPhotos.splice(index, 1);
    deletePhoto([...copyPhotos]);
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
                <DeleteIcon />
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
