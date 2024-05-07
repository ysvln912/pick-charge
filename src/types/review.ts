export interface ReviewRequestInfo {
  userId: number | string;
  chargerId: number;
  content: string;
  rating: number;
}

export interface ReviewResponseInfo {
  reviewId: string;
  chargerName: string;
  content: string;
  rating: number;
  imageUrls: string[];
  createAt: Date;
  nickname: string;
  profileImage: string;
  userIdMatch?: boolean;
}

export interface ReviewManagesRequestInfo {
  currentPage: number;
  pageSize: number;
  totalReviews: number;
  reviews: Reviews[];
}

export interface Reviews {
  chargerName: string;
  content: string;
  rating: number;
  imageUrls: string[];
  reviewId: number;
  createAt: Date;
}

export interface ReviewImage {
  createDate: string;
  id: number;
  imgUrl: string[];
  lastModifiedDate: string;
}
