import reviewApi from "@/apis/review";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar.tsx";
import IconButton from "@/components/common/iconButton/IconButton.tsx";
import ReviewEditContent from "@/components/pages/reviewWrite/reviewEditContent/ReviewEditContent.tsx";
import { useNavigate } from "react-router-dom";
export interface ReviewType {
  chargerName: string;
  chargerId: number | null;
  rating: number;
  content: string;
  userId?: number;
  imgUrl?: string[];
  userIdMatch?: boolean;
}

export default function ReviewWrite() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavigationBar
        text="리뷰 작성하기"
        leftBtn={<IconButton icon="arrowLeft" onClick={() => navigate(-1)} />}
      />
      <ReviewEditContent
        submitReview={(formData) => reviewApi.postReview(formData)}
      />
    </>
  );
}
