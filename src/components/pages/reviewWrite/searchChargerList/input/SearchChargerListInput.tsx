import * as S from "./SearchChargerListInput.style";

import Input from "@/components/common/input/input";
import ArrowLeftIcon from "@/components/common/icons/ArrowLeftIcon";

export default function SearchChargerListInput() {
  return (
    <S.Input>
      <S.Wrapper>
        <Input.Left>
          <ArrowLeftIcon />
        </Input.Left>
        <Input.Center />
      </S.Wrapper>
    </S.Input>
  );
}
