import { api } from "./@config";

const reviewApi = {
  postReview(data: FormData) {
    return api.post("eview", data).then((response) => response.data);
  },
  deleteReview(reviewId: string) {
    return api.delete(`/review/${reviewId}`).then((response) => response.data);
  },
  patchReview(data: FormData, reviewId: string) {
    return api
      .patch(`/review/${reviewId}`, data)
      .then((response) => response.data);
  },
  getUserReview() {
    return api.get(`/review/users/info`).then((response) => response.data);
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
