import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as S from "./ChargerDetail.style";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ArrowDownIcon from "@/components/common/icons/ArrowDownIcon";
import ArrowRightIcon from "@/components/common/icons/ArrowRightIcon";
import LikeIcon from "@/components/common/icons/LikeIcon";
import ChargingRoleCard from "@/components/common/chargingRoleCard/ChargingRoleCard";
import RatingWithStar from "@/components/common/ratingWithStar/RatingWithStar";
import ReviewItem from "@/components/common/reviewItem/ReviewItem";
import ChargerStatus from "@/components/common/chargerStatus/ChargerStatus";
import { Charger } from "@/types/charger";
import chargerApi from "@/apis/charger";

export default function ChargerDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const chargerId = Number(id);
    const [data, setData] = useState<Charger>();

    useEffect(() => {
        chargerApi
            .getChargerDetail(chargerId, 1)
            .then((res: Charger) => {
                setData(res);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }, [chargerId]);

    if(!data){
        return <></>
    }

    return (
        <S.ChargerContainer>
            <TopNavigationBar
                leftBtn={<ArrowDownIcon />}
                text={data.chargerName}
                rightBtn={<LikeIcon />}
            />
            <S.ChargerOverview>
                <div className="company">회사명</div>
                <div className="status">
                    <ChargingRoleCard role={data.chargerRole} />
                    <RatingWithStar rating={data.avgRate} />
                </div>
                <S.Title>{data.chargerName}</S.Title>
                <div className="address">{data.chargerLocation}</div>
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
                            <ChargerStatus status={data.chargerStatus} />
                        </td>
                        <td>
                            {data.chargerTypeList.map(
                                (chargerType) => {
                                    return (
                                        <span key={chargerType.id}>
                                            {chargerType.type}
                                        </span>
                                    );
                                }
                            )}
                        </td>
                    </tr>
                </table>
            </S.ChargerInfo>
            <S.ChargerPrice>
                <S.Title>충전 요금</S.Title>
                <p>{data.chargingSpeed}</p>
                <S.PriceInfo>
                    <div className="price-quantity  row">100kWh</div>
                    <div className="price-member row">
                        <div>회원가</div>
                        <div>비회원가</div>
                    </div>
                    <div className="price-rate row">
                        <div>
                            <span>{data.memberPrice}원</span> /kWh
                        </div>
                        <div>
                            <span>{data.nonmemberPrice}원</span> /kWh
                        </div>
                    </div>
                </S.PriceInfo>
            </S.ChargerPrice>
            <S.ChargerReview>
                <div className="reviewTitle">
                    <S.Title>충전소 리뷰 </S.Title>
                    <Link to={`/charger/${data.chargerId}/reviews`}>
                        전체보기
                        <ArrowRightIcon />
                    </Link>
                </div>

                {!data.reviewList? <></>:data.reviewList.map((review) => {
                    return (
                        <ReviewItem
                            key={review.id}
                            date={review.modified_at}
                            address={data.chargerName}
                            rating={String(review.rating)}
                            review={review.content}
                            onClick={() => {
                                navigate(`/review/${review.id}`);
                            }}
                        />
                    );
                })}
            </S.ChargerReview>
        </S.ChargerContainer>
    );
}
