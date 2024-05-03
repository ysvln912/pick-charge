import { api } from "./@config";
import { ReviewRequestInfo } from "@/types/review";

const reviewApi = {
  postReview(data: ReviewRequestInfo) {
    return api.post("/review", data).then((response) => response.data);
  },
  deleteReview(reviewId: string, userId: string) {
    return api
      .delete(`/review/${reviewId}?userId=${userId}`)
      .then((response) => response.data);
  },
  patchReview(data: ReviewRequestInfo, reviewId: string, userId: string) {
    return api
      .patch(`/review/${reviewId}?userId=${userId}`, data)
      .then((response) => response.data);
  },
  getUserReview(userId: string) {
    return api.get(`/review/users/${userId}`).then((response) => response.data);
  },
  getEditReview(reviewId: string) {
    return api
      .get(`/review/update/${reviewId}`)
      .then((response) => response.data);
  },
  getDetailReview(reviewId: string) {
    return api
      .get(`/review/detail/${reviewId}`)
      .then((response) => response.data);
  },
  getChargerReview(reviewId: string) {
    return api
      .get(`/review/charger/${reviewId}`)
      .then((response) => response.data);
  },
};

export default reviewApi;
