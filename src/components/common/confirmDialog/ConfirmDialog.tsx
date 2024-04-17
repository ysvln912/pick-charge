import React from "react";

import * as S from "./ConfirmDialog.style";
import Button from "../button/Button";

interface ConfirmProps {
    title: string;
    contents?: string;
    confirmButton: string;
    cancelButton: string;
}

function InputDiv(props: { contents: string }) {
    return (
        <S.ConfirmContents>
            <p>{props.contents}</p>
            {/* input 수정 예정 */}
            <input type="text" />
        </S.ConfirmContents>
    );
}

// 예시1 : <ConfirmDialog title="로그아웃 할까요?" confirmButton="완료" cancelButton="취소"/>
// 예시2 : <ConfirmDialog title="닉네임수정" contents="닉네임" confirmButton="완료" cancelButton="취소"/>
export default function ConfirmDialog(props: ConfirmProps) {
    return (
        <S.ConfirmContainer>
            <S.Confirm>
                <S.ConfirmTitle>{props.title}</S.ConfirmTitle>
                {props.contents ? (
                    <InputDiv contents={props.contents} />
                ) : (
                    <></>
                )}
                <S.ButtonDiv>
                    <Button size="big" category="nomal">
                        {props.confirmButton}
                    </Button>
                    <Button size="big" category="retry">
                        {props.cancelButton}
                    </Button>
                </S.ButtonDiv>
            </S.Confirm>
        </S.ConfirmContainer>
    );
}
