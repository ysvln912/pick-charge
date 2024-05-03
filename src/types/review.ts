export interface ReviewRequestInfo {
  userId: number;
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
}
