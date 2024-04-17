import * as S from "./Select.style";

import ExpandIcon from "../icons/ExpandIcon";
import BottomSheet from "../bottomSheet/BottomSheet";
import { useToggle } from "@/hooks/useToggle";

export interface SelectOptionsType {
  [key: string]: string;
}

export interface SelectProps {
  selectText: string;
  optionTitle: string;
  options: SelectOptionsType[];
}

export default function Select({
  selectText,
  optionTitle,
  options,
}: SelectProps) {
  const { open, close, isOpen } = useToggle(false);
  /**
   * @todo option 값을 선택했을 때 selectText의 값이 선택한 option값이 되어야 함.
   * @todo Context 혹은 상태관리 사용하여 select가 가지는 value 값 관리 해보기.
   */
  return (
    <>
      <S.SelectContainer onClick={open}>
        <S.SelectContentBox>
          <S.SelectContentText>{selectText}</S.SelectContentText>
          <ExpandIcon />
        </S.SelectContentBox>
      </S.SelectContainer>
      {isOpen && (
        <BottomSheet close={close}>
          <S.Title>{optionTitle}</S.Title>
          <S.OptionList>
            {options.map((el) => {
              const [key, value] = Object.entries(el)[0];
              return (
                <S.OptionItem key={key} value={value} onClick={close}>
                  {key}
                </S.OptionItem>
              );
            })}
          </S.OptionList>
        </BottomSheet>
      )}
    </>
  );
}
