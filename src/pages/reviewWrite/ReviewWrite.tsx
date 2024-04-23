import * as S from "./ReviewWrite.style.tsx";

import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar.tsx";
import SearchInput from "@/components/common/searchInput/SearchInput.tsx";
import Label from "@/components/common/label/Label.tsx";
import Rating from "@/components/pages/reviewWrite/rating/Rating.tsx";
import Textarea from "@/components/common/textarea/Textarea.tsx";
// import PhotoRegister from "@/components/common/photoRegister/PhotoRegister.tsx";
import StickButton from "@/components/common/stickyButton/StickyButton.tsx";
import IconButton from "@/components/common/iconButton/IconButton.tsx";

export default function ReviewWrite() {
  return (
    <>
      <TopNavigationBar
        text="리뷰 작성하기"
        leftBtn={<IconButton icon={"arrowLeft"} />}
      />

      <S.Container>
        <S.Box>
          <Label>충전소</Label>
          <SearchInput placeholder="주소를 입력해 주세요." />
        </S.Box>
        <S.Box>
          <Label>별점</Label>
          <Rating />
        </S.Box>
        <S.Box>
          <Textarea label="내용" placeholder="리뷰 내용을 입력해 주세요." />
        </S.Box>
        {/* <PhotoRegister photos={[]} updatePhotos={[]} /> */}
      </S.Container>
      <StickButton text="작성완료" />
    </>
  );
}
