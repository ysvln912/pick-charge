import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as S from "./ChargerDetail.style";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ArrowDownIcon from "@/components/common/icons/ArrowDownIcon";
import ArrowRightIcon from "@/components/common/icons/ArrowRightIcon";
import ChargingRoleCard from "@/components/common/chargingRoleCard/ChargingRoleCard";
import RatingWithStar from "@/components/common/ratingWithStar/RatingWithStar";
import ReviewItem from "@/components/common/reviewItem/ReviewItem";
import ChargerStatus from "@/components/common/chargerStatus/ChargerStatus";
import { Charger } from "@/types/charger";
import chargerApi from "@/apis/charger";
import IconButton from "@/components/common/iconButton/IconButton";
import { useToggle } from "@/hooks/useToggle";
import { isPending } from "@reduxjs/toolkit";
import BottomSheet from "@/components/common/bottomSheet/BottomSheet";
import EditIcon from "@/components/common/icons/EditIcon";
import DeleteIcon from "@/components/common/icons/DeleteIcon";
import StickButton from "@/components/common/stickyButton/StickyButton";

export default function ChargerDetail() {
    const navigate = useNavigate();
    const { open, close, isOpen } = useToggle(false);
    const { id } = useParams();
    const chargerId = Number(id);
    const [data, setData] = useState<Charger>({
        chargerId: 1,
        chargerLocation: "서울시 강남구 역삼동",
        chargerName: "강남 충전소",
        latitude: 37.123456,
        longitude: 127.123456,
        chargerTypeList: [
            { id: 1, type: "DC 차데모" },
            { id: 2, type: "AC 완속" },
        ],
        chargerRole: "개인",
        avgRate: 4.5,
        chargerStatus: "이용가능",
        chargingSpeed: "빠름",
        content: "충전이 가능한 충전소입니다.",
        memberPrice: 5000,
        nonmemberPrice: 7000,
        personalPrice: 6000,
        chargerImageList: ["image1.jpg", "image2.jpg"],
        reviewList: [],
        favorite: true,
    });

    // async function fetchChargerDetail() {
    //     try {
    //         const res = await chargerApi.getChargerDetail(chargerId, 1);
    //         setData(res);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     fetchChargerDetail();
    // }, [chargerId]);

    function handleDelete() {
        console.log(`충전소 삭제 api요청`);
    }

    function handleEmptyLike() {
        setData((prevData) => ({
            ...prevData,
            favorite: true,
        }));
        console.log(`즐겨찾기 추가 api요청`);
    }

    function handleLike() {
        setData((prevData) => ({
            ...prevData,
            favorite: false,
        }));
        console.log(`즐겨찾기 삭제 api요청`);
    }

    function MoreIconButton() {
        return <IconButton icon="more" onClick={open} />;
    }

    function EmptyLikeButton() {
        return <IconButton icon="emptyLike" onClick={handleEmptyLike} />;
    }
    function LikeButton() {
        return <IconButton icon="like" onClick={handleLike} />;
    }

    if (!data) {
        return <></>;
    }

    return (
        <S.ChargerContainer>
            <TopNavigationBar
                leftBtn={<IconButton icon="arrowDown" />}
                text={data.chargerName}
                rightBtn={data.favorite ? <LikeButton /> : <EmptyLikeButton />}
            />
            <S.ChargerOverview>
                <S.ChargerCompany>회사명</S.ChargerCompany>
                <S.ChargerStatus>
                    <ChargingRoleCard role={data.chargerRole} />
                    <RatingWithStar rating={data.avgRate} />
                </S.ChargerStatus>
                <S.Title>{data.chargerName}</S.Title>
                <S.ChargerAddress>{data.chargerLocation}</S.ChargerAddress>
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
                            {data.chargerTypeList.map((chargerType) => {
                                return (
                                    <span key={chargerType.id}>
                                        {chargerType.type}
                                    </span>
                                );
                            })}
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

                {data.reviewList && data.reviewList.length !== 0 ? (
                    data.reviewList.map((review) => {
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
                    })
                ) : (
                    <S.EmptyReview>
                        <S.SubTitle>아직 리뷰가 없어요!</S.SubTitle>
                        <p>충전소에 대한 경험을 공유해 주세요</p>
                    </S.EmptyReview>
                )}
            </S.ChargerReview>
            {data.chargerRole === "개인" ? (
                <StickButton
                    text="문의하기"
                    onClick={() => {
                        console.log("채팅으로이동");
                    }}
                />
            ) : (
                <></>
            )}

            {isOpen && (
                <BottomSheet open={isOpen} close={close}>
                    <S.ButtomList>
                        <S.ButtomItem
                            onClick={() => {
                                navigate(`/charger/${1}/edit`);
                            }}>
                            <EditIcon />
                            수정하기
                        </S.ButtomItem>
                        <S.ButtomItem onClick={handleDelete}>
                            <DeleteIcon />
                            삭제하기
                        </S.ButtomItem>
                    </S.ButtomList>
                </BottomSheet>
            )}
        </S.ChargerContainer>
    );
}
