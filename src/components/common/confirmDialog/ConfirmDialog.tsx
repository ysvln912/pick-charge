import React from "react";

import * as S from "./ConfirmDialog.style";
import Button from "../button/Button";

type ConfirmDialogProps = {
    title: string;
    type?: "confirm" | "dialog";
    confirmButton: string;
    cancelButton: string;
    confirmOnClick: () => void;
    cancelOnClick: () => void;
    children?: React.ReactNode;
};

{
    /* <ConfirmDialog
                title="로그아웃 할까요?"
                type="confirm"
                confirmButton="확인"
                confirmOnClick={() => {
                    console.log("확인");
                }}
                cancelButton="취소"
                cancelOnClick={()=>{console.log("취소")}}
            /> */
}
export default function ConfirmDialog({
    title,
    type = "confirm",
    confirmButton,
    cancelButton,
    confirmOnClick,
    cancelOnClick,
    children,
}: ConfirmDialogProps) {
    return (
        <S.ConfirmContainer>
            <S.Confirm>
                <S.ConfirmTitle type={type}>{title}</S.ConfirmTitle>
                {type === "dialog" && (
                    <S.ConfirmContents>{children}</S.ConfirmContents>
                )}
                <S.ButtonDiv>
                    <Button
                        size="md"
                        category="normal"
                        onClick={confirmOnClick}>
                        {confirmButton}
                    </Button>
                    <Button
                        size="md"
                        category="outline"
                        onClick={cancelOnClick}>
                        {cancelButton}
                    </Button>
                </S.ButtonDiv>
            </S.Confirm>
        </S.ConfirmContainer>
    );
}
