import * as S from "./Select.style";

import { MouseEvent } from "react";
import ExpandIcon from "../icons/ExpandIcon";
import BottomSheet from "../bottomSheet/BottomSheet";
import { useToggle } from "@/hooks/useToggle";
import { useSelect } from "@/hooks/useSelect";

export interface SelectOptionsType {
  [key: string]: string;
}

export interface SelectProps {
  disabled?: boolean;
  value: string | null;
  selectText: string;
  optionTitle: string;
  options: SelectOptionsType[];
  onChange: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Select({
  disabled = false,
  value,
  selectText,
  optionTitle,
  options,
  onChange,
}: SelectProps) {
  const { open, close, isOpen } = useToggle(false);

  const { selected, onSelect } = useSelect({
    defaultValue: selectText,
    value,
  });

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onChange(e);
    onSelect(e.currentTarget.value);
    close();
  };

  return (
    <>
      <S.SelectContainer onClick={open} disabled={disabled}>
        <S.SelectContentBox>
          <S.SelectContentText disabled={disabled}>
            {selected == null || "" ? selectText : selected}
          </S.SelectContentText>
          <ExpandIcon />
        </S.SelectContentBox>
      </S.SelectContainer>
      {isOpen && !disabled && (
        <BottomSheet close={close}>
          <S.Title>{optionTitle}</S.Title>
          <S.OptionList>
            {options.map((el) => {
              const [key, value] = Object.entries(el)[0];
              return (
                <S.OptionItem key={key}>
                  <button value={value} onClick={handleClick}>
                    {key}
                  </button>
                </S.OptionItem>
              );
            })}
          </S.OptionList>
        </BottomSheet>
      )}
    </>
  );
}
