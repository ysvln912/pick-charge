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
   * @todo 1. option 값을 선택했을 때 selectText의 값이 선택한 option값이 되어야 함.
   *  2. Context 혹은 상태관리 사용하여 select가 가지는 value 값 관리 해보기.
   *  3. 키보드 액션으로 선택 가능하게 만들어보기.
   *  4. 리스트가 열려있는 상태일 때 선택 된 옵션에 포커스 되어있어야 하고 / 키보드로 옵션 탐색할 수 있게 해보기.
   *  04/22 까지 작업 예정.
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
                <S.OptionItem key={key} value={value}>
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
