/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./ReviewEditContent.style";

import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/useToast";

import MESSAGE from "@/constants/message";
import ChargerSearch from "@/components/pages/charger/ChargerSearch";
import SearchChargerInput from "../searchChargerInput/SearchChargerInput";
import Label from "@/components/common/label/Label";
import PhotoRegister from "@/components/common/photoRegister/PhotoRegister";
import StickButton from "@/components/common/stickyButton/StickyButton";
import Textarea from "@/components/common/textarea/Textarea";
import Rating from "@/components/pages/reviewWrite/rating/Rating";
import { ReviewType } from "@/pages/reviewWrite/ReviewWrite";

export interface ReviewEditContentProps {
  data: ReviewType;
  setData: Dispatch<SetStateAction<ReviewType>>;
}

export default function ReviewEditContent({
  data,
  setData,
}: ReviewEditContentProps) {
  const [error, setError] = useState({
    chargerId: "",
    content: "",
  });

  const [chargerInfo, setChargerInfo] = useState({
    address: {
      name: "",
      location: "",
      latitude: 0,
      longitude: 0,
    },
    keyword: "",
  });
  const [photos, setPhotos] = useState<File[]>([]);

  const navigate = useNavigate();
  const { triggerToast } = useToast();

  const { chargerId, content, rating, userId } = data;

  const updatePhoto = (photo: File) => {
    setPhotos((prev) => [...prev, photo]);
  };
  const deletePhoto = (photos: File[]) => {
    setPhotos(photos);
  };

  const handleUpdateValue = (value: string | number, name: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = chargerId && content;

  const handleSubmit = () => {
    if (!isFormValid) {
      setError({
        chargerId: chargerId ? "" : MESSAGE.REVIEW.REQUIRE,
        content: content ? "" : MESSAGE.REVIEW.REQUIRE,
      });
      return;
    }
    const newData = { ...data, photos };

    triggerToast("리뷰가 저장되었어요.", "success");
    // navigate(`/reviwew/${reviewId}`)
    console.log({ newData });
  };

  return (
    <>
      <S.Container>
        <S.Box>
          {/* <ChargerSearch
            chargerInfo={chargerInfo}
            setChargerInfo={setChargerInfo}
          /> */}

          <SearchChargerInput
            error={error.chargerId}
            onChange={(e) => handleUpdateValue(e.target.value, "chargerId")}
          />
          {/* <SearchInput
            require
            name="chargerId"
            placeholder="주소를 입력해 주세요."
            label="충전소"
            error={error.chargerId}
            onChange={(e) => handleUpdateValue(e.target.value, "content")}
          /> */}
        </S.Box>
        <S.Box>
          <Label>별점</Label>
          <Rating name="rating" onChange={handleUpdateValue} value={rating} />
        </S.Box>
        <S.Box>
          <Textarea
            require
            name="content"
            label="내용"
            value={content}
            error={error.content}
            placeholder="리뷰 내용을 입력해 주세요."
            onChange={(e) => handleUpdateValue(e.target.value, "content")}
          />
        </S.Box>
        <PhotoRegister
          photos={photos}
          updatePhoto={updatePhoto}
          deletePhoto={deletePhoto}
        />
      </S.Container>
      <StickButton text="작성완료" onClick={handleSubmit} />
    </>
  );
}
