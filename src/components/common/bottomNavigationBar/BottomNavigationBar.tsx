import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./BottomNavigationBar.style";
import HomeIcon from "../icons/HomeIcon";
import MapIcon from "../icons/MapIcon";
import ChatIcon from "../icons/ChatIcon";
import PersonIcon from "../icons/PersonIcon";

export default function BottomNavigationBar() {
    return (
        <S.BottomContainer>
            <NavLink to={"/"}>
                <HomeIcon />
                <p>메인</p>
            </NavLink>
            <NavLink to={"/charging-map"}>
                <MapIcon />
                <p>충전소</p>
            </NavLink>
            <NavLink to={"/chat-list"}>
                <ChatIcon />
                <p>채팅</p>
            </NavLink>
            <NavLink to={"/mypage"}>
                <PersonIcon />
                <p>마이페이지</p>
            </NavLink>
        </S.BottomContainer>
    );
}
