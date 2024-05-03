/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState, FormEvent, RefObject } from "react";
import MESSAGE from "@/constants/message";
import VALIDATE from "@/utils/regex";
export interface FormErrorType {
  readonly [name: string]: string;
}
export interface PatternsType {
  [key: string]: RegExp;
}

export const validatePasswordMatch = (
  password: string,
  passwordCheck: string
) => {
  return password === passwordCheck;
};

export const useFormValidation = <T extends Record<string, string>>(
  initialState: T
) => {
  const [value, setValue] = useState<T>(initialState);
  const [error, setError] = useState<FormErrorType>({});
  const patterns: PatternsType = VALIDATE;

  const validateInputValue = (name: string, inputValue: string) => {
    if (!patterns[name]) return true;

    const result = patterns[name].test(inputValue);
    if (!result) {
      const key = name.toLocaleUpperCase() as keyof (typeof MESSAGE)["SYNTAX"];
      setError((prev) => ({
        ...prev,
        [name]: MESSAGE.SYNTAX[key],
      }));
    }

    return result;
  };

  const resetError = (name: string) => {
    if (!error[name]) return;

    setError((prev) => {
      const { [name]: _, ...rest } = prev;
      return rest;
    });
  };

  const updateValue = (name: string, value: string) => {
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange =
    (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      updateValue(name, inputValue);

      // Q. 현재 비밀번호 일치 로직을 따로 하드코딩 했는데, 다른 방법이 없을지?
      // 현재 util 파일에 있는 regex 로 관리하기 위해 훅으로 뻈는데, 일치 여부는 정규 표현식으로 관리할 수가 없어서...

      // 비밀번호 확인
      if (name === "passwordCheck") {
        const password = value["password"] as string;
        const isMatch = validatePasswordMatch(password, inputValue);
        if (isMatch) {
          resetError(name);
        } else {
          setError((prev) => ({
            ...prev,
            passwordCheck: "비밀번호가 일치하지 않습니다.",
          }));
        }
      } else {
        // 유효성 검사를 통과하면 에러 리셋
        if (validateInputValue(name, inputValue)) {
          resetError(name);
        }
      }
    };

  const isFormValid = () => {
    let isValid = true;

    Object.keys(patterns || {}).forEach((key) => {
      // const result = validateInputValue(key, String(value[key as keyof T]));
      const result = validateInputValue(key, value[key]);

      if (!result) {
        isValid = false;
        setError((prev) => ({
          ...prev,
          [key]: MESSAGE.SYNTAX[key as keyof (typeof MESSAGE)["SYNTAX"]],
        }));
      }
    });

    return isValid;
  };

  const handleSubmit =
    (callback: () => void) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isFormValid()) {
        callback();
      }
    };

  const resetFormState = () => {
    setValue(initialState);
    setError({});
  };

  return {
    formState: value,
    handleInputChange,
    resetFormState,
    error,
    handleSubmit,
  };
};
