import { Link, useNavigate } from "react-router-dom";

import * as S from "./Home.style";
// import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";
import MenuCard from "@/components/pages/home/MenuCard";
import SearchInput from "@/components/common/searchInput/SearchInput";
import logo from "@/assets/imgs/logo_small.png";
import ChatIcon from "@/components/common/icons/ChatIcon";
import SolidMapIcon from "@/components/common/icons/SolidMapIcon";
import EditIcon from "@/components/common/icons/EditIcon";
import FlashIcon from "@/components/common/icons/FlashIcon";
import ArrowRightIcon from "@/components/common/icons/ArrowRightIcon";

export default function Home() {
    const navigate = useNavigate();

    // const sampleData: Charger[] = [
    //     {
    //         id: 1,
    //         charger_location: "서울특별시 마포구 월드컵북로 502-37",
    //         charger_name: "퀵차지 2000",
    //         charging_speed: "급속",
    //         status: "이용가능",
    //         latitude: 37.123456,
    //         longitude: -122.345678,
    //         content: "이 충전기는 전s 차량을 위한 빠른 충전을 지원합니다.",
    //         avg_rate: "4.5",
    //         company_name: "에코차지 주식회사",
    //         member_price: 10,
    //         nonmember_price: 15,
    //         personal_price: 12,
    //         charger_type: "DC차데모AC3상",
    //         charger_role: "개인",
    //     },
    //     {
    //         id: 2,
    //         charger_location:
    //             "서울 송파구 올림픽로43길 88 서울아산병원 (풍납동 388-1)",
    //         charger_name: "에코차지 표준",
    //         charging_speed: "완속",
    //         status: "이용자제한",
    //         latitude: 37.987654,
    //         longitude: -122.876543,
    //         content: "이 충전s는 전기 차량을 위한 표준 충전을 제공합니다.",
    //         avg_rate: "3.8",
    //         company_name: "에코차지 주식회사",
    //         member_price: 5,
    //         nonmember_price: 10,
    //         personal_price: 8,
    //         charger_type: "완속",
    //         charger_role: "공공",
    //     },
    //     {
    //         id: 3,
    //         charger_location: "서울특별시 마포구 월드컵북로 502-37",
    //         charger_name: "퀵차지 2000",
    //         charging_speed: "급속",
    //         status: "이용가능",
    //         latitude: 37.123456,
    //         longitude: -122.345678,
    //         content: "이 충전기는 전s 차량을 위한 빠른 충전을 지원합니다.",
    //         avg_rate: "4.5",
    //         company_name: "에코차지 주식회사",
    //         member_price: 10,
    //         nonmember_price: 15,
    //         personal_price: 12,
    //         charger_type: "DC차데모AC3상",
    //         charger_role: "개인",
    //     },
    // ];

    return (
        <S.HomeContainer>
            <img src={logo} alt="logo" />
            <S.SearchDiv>
                <p>어디서 </p>
                <p>
                    <span>전기차 충전소</span>를 찾아볼까요?
                </p>
                <SearchInput
                    placeholder="충전소 찾아보기"
                    onFocus={() => {
                        navigate("/charger/list");
                    }}
                />
            </S.SearchDiv>
            <S.MenuDiv>
                <S.MenuRow>
                    <div className="menuColumn">
                        <MenuCard
                            path="/charger/map"
                            title="내 주변 찾기"
                            describe="가까운 전기차 충전소를 바로 찾아보세요!"
                            shape="halfSquare">
                            <SolidMapIcon />
                        </MenuCard>
                    </div>
                    <div className="menuList">
                        <MenuCard
                            path="/review/write"
                            title="리뷰 작성하기"
                            describe="충전소 리뷰를 남길 수 있어요"
                            shape="halfRectangle">
                            <EditIcon />
                        </MenuCard>
                        <MenuCard
                            path="/chat-list"
                            title="채팅하기"
                            describe="충전소를 문의해보세요"
                            shape="halfRectangle">
                            <ChatIcon />
                        </MenuCard>
                    </div>
                </S.MenuRow>
                <S.MenuRow>
                    <MenuCard
                        path="/register-charger"
                        title="나의 충전기 등록하기"
                        describe="충전소 지도에 나의 충전기를 등록할 수 있어요"
                        shape="fullRectangle">
                        <FlashIcon />
                    </MenuCard>
                </S.MenuRow>
            </S.MenuDiv>

            <S.FavoritesCharger>
                <p>즐겨찾는 충전소</p>

                <Link to={"/mypage/favorites"}>
                    전체보기
                    <ArrowRightIcon />
                </Link>
            </S.FavoritesCharger>
            <S.EmptyFavorite>
                    자주가는 충전소를 등록해 보세요!
                </S.EmptyFavorite>
            {/* {sampleData.length === 0 ? (
                <S.EmptyFavorite>
                    자주가는 충전소를 등록해 보세요!
                </S.EmptyFavorite>
            ) : (<></>
                sampleData.slice(0, 2).map((data) => {
                    return (
                        <ChargingInfo
                            key={data.id}
                            info={data}
                            like={true}
                            tag={true}
                            border="full"
                            path={`/charger/${data.id}`}
                        />
                    );
                })
            )} */}
        </S.HomeContainer>
    );
}
