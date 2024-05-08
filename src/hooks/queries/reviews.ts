/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQuery } from "@tanstack/react-query";
import reviewApi from "@/apis/review";

const useGetChargerReview = (chargerId: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["getChargerReview"],
    queryFn: () => {
      return reviewApi.getChargerReview(chargerId);
    },
  });
  return { data, ...rest };
};

const useGetUserReview = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["getUserReview"],
    queryFn: () => {
      return reviewApi.getUserReview();
    },
  });
  return { data, ...rest };
};

const useGetReviewDetail = (reviewId: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["getDetailReview"],
    queryFn: () => {
      return reviewApi.getDetailReview(reviewId);
    },
  });
  return { data, ...rest };
};

export { useGetChargerReview, useGetUserReview, useGetReviewDetail };
