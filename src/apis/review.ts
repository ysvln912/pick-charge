import { api } from "./@config";

const reviewApi = {
  postReview(data: FormData) {
    return api.post("/api/review", data).then((response) => response.data);
  },
  deleteReview(reviewId: string) {
    return api
      .delete(`/api/review/${reviewId}`)
      .then((response) => response.data);
  },
  patchReview(data: FormData, reviewId: string) {
    return api
      .patch(`/api/review/${reviewId}`, data)
      .then((response) => response.data);
  },
  getUserReview() {
    return api.get(`/api/review/users/info`).then((response) => response.data);
  },
  getEditReview(reviewId: string) {
    return api
      .get(`/api/review/update/${reviewId}`)
      .then((response) => response.data);
  },
  getDetailReview(reviewId: string) {
    return api
      .get(`/api/review/detail/${reviewId}`)
      .then((response) => response.data);
  },
  getChargerReview(reviewId: string) {
    return api
      .get(`/api/review/charger/${reviewId}`)
      .then((response) => response.data);
  },
};

export default reviewApi;
