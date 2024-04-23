import * as S from "./ReviewDetail.style";

import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import LineIcon from "@/components/common/icons/LineIcon";
import RatingWithStar from "@/components/common/ratingWithStar/RatingWithStar";
import PhotoList from "@/components/common/photoList/PhotoList";
import BottomSheet from "@/components/common/bottomSheet/BottomSheet";
import EditIcon from "@/components/common/icons/EditIcon";
import DeleteIcon from "@/components/common/icons/DeleteIcon";
import IconButton from "@/components/common/iconButton/IconButton";
import RightIcon from "@/components/common/icons/RightIcon";
import { useToggle } from "@/hooks/useToggle";

import profile from "@/assets/imgs/profile_big.png";

export default function ReviewDetail() {
  const { open, close, isOpen } = useToggle(false);
  return (
    <>
      <TopNavigationBar leftBtn={<IconButton icon={"arrowLeft"} />} />
      <RightIcon />
      <S.Container>
        <S.Top>
          {/* 작성자 프로필 */}
          <S.ProfileWrapper>
            <S.ProfileImageBox>
              <S.Profile src={profile}></S.Profile>
            </S.ProfileImageBox>

            <S.ProfileBox>
              <S.UserNickName>피카츄</S.UserNickName>
              <LineIcon />
              <S.DateText>2024-04-10</S.DateText>
            </S.ProfileBox>
          </S.ProfileWrapper>

          <S.MoreIconWrapper>
            <IconButton icon={"more"} onClick={open} />
          </S.MoreIconWrapper>
        </S.Top>

        <S.Content>
          {/* 리뷰 타이틀 */}
          <S.Title>
            <S.Address>상암월드컵파트3단지</S.Address>
            <LineIcon />
            <RatingWithStar rating="3" />
          </S.Title>

          {/* 리뷰 내용 */}
          <S.ReviewContent>
            <S.ReviewText>
              리뷰 내용이 들어가는 공간입니다. 리뷰 내용이 들어가는 공간입니다.
              리뷰 내용이 들어가는 공간입니다. 리뷰 내용이 들어가는 공간입니다.
              리뷰 내용이 들어가는 공간입니다. 리뷰 내용이 들어가는 공간입니다.
              리뷰 내용이 들어가는 공간입니다. 리뷰 내용이 들어가는 공간입니다.{" "}
            </S.ReviewText>
            <PhotoList imgs={[profile, profile, profile, profile]} />
          </S.ReviewContent>
        </S.Content>
      </S.Container>
      {isOpen && (
        <BottomSheet close={close}>
          <S.List>
            <S.Item>
              <EditIcon />
              <p>수정하기</p>
            </S.Item>
            <S.Item>
              <DeleteIcon width="15" height="15" color="#000" />
              <p>삭제하기</p>
            </S.Item>
          </S.List>
        </BottomSheet>
      )}
    </>
  );
}
