import React from "react";

import * as S from "./ConfirmDialog.style";

interface ConfirmProps {
    contents: string;
}


// 사용예시 : <ConfirmDialog  contents="로그아웃 할까요?"/>
export default function ConfirmDialog(props:ConfirmProps) {
    return (
        <S.ConfirmContainer>
            <S.Confirm>
                <S.ConfirmContents>{props.contents}</S.ConfirmContents>
                <S.ButtonDiv>
                    {/* 버튼 수정 예정 */}
                    <button>확인</button>
                    <button>취소</button>
                </S.ButtonDiv>
            </S.Confirm>
        </S.ConfirmContainer>
    );
}
