import React from "react";
import { Link } from "react-router-dom";

import * as S from "./ChargerDetail.style";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ArrowDownIcon from "@/components/common/icons/ArrowDownIcon";
import ArrowRightIcon from "@/components/common/icons/ArrowRightIcon";
import LikeIcon from "@/components/common/icons/LikeIcon";
import ChargingRoleCard from "@/components/common/chargingRoleCard/ChargingRoleCard";
import RatingWithStar from "@/components/common/ratingWithStar/RatingWithStar";
import ReviewItem from "@/components/common/reviewItem/ReviewItem";
import ChargerStatus from "@/components/common/chargerStatus/ChargerStatus";

export default function ChargerDetail() {
    const sampleCharger = {
        id: 1,
        user_id: 101,
        charger_location: "서울특별시 광진구 자양로 222",
        charger_name: "퀵차지 2000",
        charging_speed: "급속",
        status: "이용가능",
        latitude: 37.537598,
        longitude: 127.082334,
        company_name: "에코차지 주식회사",
        content: "이 충전기는 전기차를 위한 빠른 충전을 지원합니다.",
        avg_rate: "4.5",
        member_price: 350.2,
        nonmember_price: 350.2,
        personal_price: 350.2,
        charger_role: "개인",
        charger_type: "DC차데모, AC3상",
    };
    const sampleReview = [
        {
            id: 1,
            user_id: 101,
            content: "Great charging experience, very fast!",
            used_charger_id: 1,
            review_image: "image1.jpg",
            rating: "5",
            created_date: "2024-04-25 10:00:00",
            modified_at: "2024-04-25 10:00:00",
        },
        {
            id: 2,
            user_id: 102,
            content: "Average charging speed, but convenient location.",
            used_charger_id: 2,
            review_image: "image2.jpg",
            rating: "3",
            created_date: "2024-04-24 15:30:00",
            modified_at: "2024-04-24 15:30:00",
        },
        {
            id: 3,
            user_id: 103,
            content: "Poor maintenance, charger was out of order.",
            used_charger_id: 3,
            review_image: "image3.jpg",
            rating: "2",
            created_date: "2024-04-23 09:45:00",
            modified_at: "2024-04-23 09:45:00",
        },
        {
            id: 4,
            user_id: 104,
            content: "Excellent service, friendly staff!",
            used_charger_id: 4,
            review_image: "image4.jpg",
            rating: "4",
            created_date: "2024-04-22 12:20:00",
            modified_at: "2024-04-22 12:20:00",
        },
    ];

    return (
        <S.ChargerContainer>
            <TopNavigationBar
                leftBtn={<ArrowDownIcon />}
                text={sampleCharger.charger_name}
                rightBtn={<LikeIcon />}
            />
            <S.ChargerOverview>
                <div className="company">{sampleCharger.company_name}</div>
                <div className="status">
                    <ChargingRoleCard role={sampleCharger.charger_role} />
                    <RatingWithStar rating={sampleCharger.avg_rate} />
                </div>
                <S.Title>{sampleCharger.charger_name}</S.Title>
                <div className="address">{sampleCharger.charger_location}</div>
            </S.ChargerOverview>
            <S.ChargerInfo>
                <S.Title>충전기 정보</S.Title>
                <table>
                    <tr>
                        <th>상태</th>
                        <th>종류</th>
                    </tr>
                    <tr>
                        <td>
                            <ChargerStatus status={sampleCharger.status} />
                        </td>
                        <td>{sampleCharger.charger_type}</td>
                    </tr>
                </table>
            </S.ChargerInfo>
            <S.ChargerPrice>
                <S.Title>충전 요금</S.Title>
                <p>{sampleCharger.charging_speed}</p>
                <S.PriceInfo>
                    <div className="price-quantity  row">100kWh</div>
                    <div className="price-member row">
                        <div>회원가</div>
                        <div>비회원가</div>
                    </div>
                    <div className="price-rate row">
                        <div><span>{sampleCharger.member_price}원</span> /kWh</div>
                        <div><span>{sampleCharger.nonmember_price}원</span> /kWh</div>
                    </div>
                </S.PriceInfo>
            </S.ChargerPrice>
            <S.ChargerReview>
                <div className="reviewTitle">
                    <S.Title>충전소 리뷰 </S.Title>
                    <Link to={"/"}>
                        전체보기
                        <ArrowRightIcon />
                    </Link>
                </div>

                {sampleReview.map((review) => {
                    return (
                        <ReviewItem
                            key={review.id}
                            date={review.modified_at}
                            address={sampleCharger.charger_name}
                            rating={review.rating}
                            review={review.content}
                        />
                    );
                })}
            </S.ChargerReview>
        </S.ChargerContainer>
    );
}
