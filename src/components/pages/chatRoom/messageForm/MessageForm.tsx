import formatTime from "@/utils/formatTime";
import React from "react";
import * as S from "./MessageForm.style";

export interface MessageFormProps {
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (text: string, createdAt: string) => void;
}

export default function MessageForm({
  text,
  onChange,
  onSubmit,
}: MessageFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    const createdAt = formatTime();
    onSubmit(text, createdAt);
  };
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder="메시지 보내기"
        value={text}
        onChange={onChange}
      />
      <S.SubmitButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
        >
          <path d="M0 16V10L8 8L0 6V0L19 8L0 16Z" fill="#D9D9D9" />
        </svg>
      </S.SubmitButton>
    </S.Form>
  );
}
