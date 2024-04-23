import * as S from "./ReviewManage.style";

import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ArrowLeftIcon from "@/components/common/icons/ArrowLeftIcon";
import ReviewItem from "@/components/common/reviewItem/ReviewItem";

export default function ReviewManage() {
  return (
    <>
      <TopNavigationBar leftBtn={<ArrowLeftIcon />} text={"리뷰 관리"} />
      <S.Container>
        <S.Title>
          내가 작성한 <span>13</span>개의 리뷰
        </S.Title>
        <S.Content>
          <ReviewItem
            date="2024-04-10"
            address="상암월드컵파크3단지"
            rating="3"
            review="미리보기가 들어가는 자리입니다. 미리보기가 들어가는 자리입니다.미리보기가 들어가는 자리입니다.미리보기가 들어가는 자리입니다.미리보기가 들어가는 자리입니다.미리보기가 들어가는 자리입니다.미리보기가 들어가는 자리입니다.미리보기가 들어가는 자리입니다."
          />
          {/* <S.EmptyText>
        <p>아직 리뷰가 없어요!</p>
        <span>충전소에 대한 경험을 공유해 주세요.</span>
      </S.EmptyText> */}
        </S.Content>
      </S.Container>
    </>
  );
}
