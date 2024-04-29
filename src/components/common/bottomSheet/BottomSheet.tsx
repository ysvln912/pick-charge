import * as S from "./BottomSheet.style";

import Button from "@/components/common/button/Button";

import { ReactNode } from "react";
import OverLay from "../overLay/OverLay";

export interface BottomSheetProps {
  children: ReactNode;
  close: () => void;
  open: boolean;
}

export default function BottomSheet({
  children,
  close,
  open,
}: BottomSheetProps) {
  return (
    <OverLay open={open} handleOpen={close}>
      <S.Container>
        {children}
        <Button size="lg" category="rounded" onClick={close}>
          닫기
        </Button>
      </S.Container>
    </OverLay>
  );
}
