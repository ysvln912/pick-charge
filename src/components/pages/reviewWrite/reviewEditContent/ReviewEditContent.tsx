/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./ReviewEditContent.style";

import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/useToast";

import { ReviewImage } from "@/types/review";
import { IchargerImage } from "@/types/myCharger";
import { reviewAtom } from "@/atoms/reviewAtom";
import { userAtom } from "@/atoms/userAtom";
import MESSAGE from "@/constants/message";
import SearchChargerInput from "../searchChargerInput/SearchChargerInput";
import Label from "@/components/common/label/Label";
import PhotoRegister from "@/components/common/photoRegister/PhotoRegister";
import StickButton from "@/components/common/stickyButton/StickyButton";
import Textarea from "@/components/common/textarea/Textarea";
import Rating from "@/components/pages/reviewWrite/rating/Rating";

interface ReviewData {
  content: string;
  rating: number;
  chargerName?: string | null;
  chargerId?: number | null;
}

export interface ReviewEditContentProps {
  submitReview: (formData: FormData) => Promise<any>;
  submitType?: "chargerName" | "chargerId";
}

export default function ReviewEditContent({
  submitReview,
  submitType = "chargerId",
}: ReviewEditContentProps) {
  const [review, setReview] = useAtom(reviewAtom);
  const [error, setError] = useState({
    chargerId: "",
    chargerName: "",
    content: "",
  });
  const [photos, setPhotos] = useState<File[]>([]);

  const navigate = useNavigate();
  const { triggerToast } = useToast();

  const { chargerId, content, rating, chargerName } = review;

  const updatePhoto = (photo: File) => {
    setPhotos((prev) => [...prev, photo]);

    setReview((prev) => {
      const updatedImgUrl = prev.imgUrl ? [...prev.imgUrl, photo] : [photo];
      return { ...prev, imgUrl: updatedImgUrl };
    });
  };

  const deletePhoto = (photos: File[]) => {
    setPhotos(photos);
    setReview((prev) => {
      const updatedImgUrl = photos;
      return { ...prev, imgUrl: updatedImgUrl };
    });
  };

  const createFormData = (data: object) => {
    const formData = new FormData();
    if (submitType == "chargerName") {
      formData.append("reviewModifyPayload", JSON.stringify(data));
    } else {
      formData.append("reviewPayload", JSON.stringify(data));
    }
    photos.forEach((photo) => {
      formData.append("imgUrl", photo);
    });

    return formData;
  };

  const handleUpdateValue = (value: string | number, name: string) => {
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = submitType && content && content.length <= 500;
  const handleSubmit = async () => {
    if (!isFormValid) {
      setError({
        chargerId: chargerId ? "" : MESSAGE.REVIEW.REQUIRE,
        chargerName: chargerName ? "" : MESSAGE.REVIEW.REQUIRE,
        content: content ? "" : MESSAGE.REVIEW.REQUIRE,
      });
      return;
    }

    try {
      const data: ReviewData = {
        content: review.content,
        rating: review.rating,
      };

      if (submitType == "chargerName") {
        data.chargerName = review.chargerName;
      } else if (submitType == "chargerId") {
        data.chargerId = review.chargerId;
      }

      const response = await submitReview(createFormData(data));

      setReview((prev) => ({
        ...prev,
        rating: 1,
        chargerName: "",
        content: "",
        imgUrl: [],
      }));
      setPhotos([]);

      triggerToast(MESSAGE.REVIEW.SUCCESS, "success");
      navigate(`/review/${response}`);
    } catch (error) {
      triggerToast(MESSAGE.REVIEW.FAILURE, "error");
    }
  };

  return (
    <>
      <S.Container>
        <S.Box>
          <Link to="/review/write/list">
            <SearchChargerInput
              error={
                submitType === "chargerId"
                  ? error.chargerId
                  : submitType === "chargerName"
                  ? error.chargerName
                  : ""
              }
              value={review.chargerName}
              onChange={(e) => handleUpdateValue(e.target.value, submitType)}
            />
          </Link>
        </S.Box>
        <S.Box>
          <Label>별점</Label>
          <Rating name="rating" onChange={handleUpdateValue} value={rating} />
        </S.Box>
        <S.Box>
          <Textarea
            maxLength={500}
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
