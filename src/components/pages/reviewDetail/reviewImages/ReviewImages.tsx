import * as S from "./ReviewImages.style";

import PhotoList from "@/components/common/photoList/PhotoList";
import PhotoSlider from "@/components/common/photoSlider/PhotoSlider";
import OverLay from "@/components/common/overLay/OverLay";

import { useToggle } from "@/hooks/useToggle";

export interface ReviewImagesProps {
  imgs: string[];
}

export default function ReviewImages({ imgs }: ReviewImagesProps) {
  const { isOpen, open, close } = useToggle(false);
  return (
    <>
      <PhotoList imgs={imgs} onClick={open} />
      {isOpen && (
        <OverLay open={isOpen} handleOpen={close}>
          <S.Wrapper>
            <PhotoSlider imgs={imgs} category="review" />
          </S.Wrapper>
        </OverLay>
      )}
    </>
  );
}
