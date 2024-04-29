import React from "react";

import * as S from "./MyInfo.style";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ArrowLeftIcon from "@/components/common/icons/ArrowLeftIcon";

import profile from "@/assets/imgs/profile_big.png";
import LabelInput from "@/components/common/labelInput/LabelInput";
import Button from "@/components/common/button/Button";
import LineIcon from "@/components/common/icons/LineIcon";

export default function MyInfo() {
    const user = {
        user_id: 1,
        userName: "JohnDoe",
        address: "123 Main St, Anytown",
        email: "john.doe@example.com",
        password: "hashedpassword123",
        phone_number: "123-456-7890",
        role: "admin",
        chargerType: "fast",
        nickname: "johnd",
        profileImage: "profile.jpg",
        resign_reason: "Moving to another city",
        resign: false,
    };

    return (
        <S.UserInfoContainer>
            <TopNavigationBar text="내 정보 관리" leftBtn={<ArrowLeftIcon />} />
            <S.InfoContainer>
                <S.ProfileContainer>
                    <img src={profile} alt="프로필 이미지" />
                </S.ProfileContainer>
                <S.ProfileInfoContainer>
                    <S.NicknamePara>{user.nickname}</S.NicknamePara>
                    <S.EmailPara>{user.email}</S.EmailPara>
                </S.ProfileInfoContainer>

                <LabelInput label="이메일" value={user.email} />
                <LabelInput label="이름" value={user.userName} />
                <S.EditContainer>
                    <LabelInput label="닉네임" value={user.nickname} />
                    <Button size="sm" category="normal">
                        수정하기
                    </Button>
                </S.EditContainer>
            </S.InfoContainer>
            <S.AccountOptionsDiv>
                <p>로그아웃</p>
                <LineIcon />
                <p>계정탈퇴</p>
            </S.AccountOptionsDiv>
        </S.UserInfoContainer>
    );
}
