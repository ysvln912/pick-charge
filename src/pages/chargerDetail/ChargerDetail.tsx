import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as S from "./ChargerDetail.style";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ArrowRightIcon from "@/components/common/icons/ArrowRightIcon";
import ChargingRoleCard from "@/components/common/chargingRoleCard/ChargingRoleCard";
import RatingWithStar from "@/components/common/ratingWithStar/RatingWithStar";
import ReviewItem from "@/components/common/reviewItem/ReviewItem";
import ChargerStatus from "@/components/common/chargerStatus/ChargerStatus";
import { Charger } from "@/types/charger";
import IconButton from "@/components/common/iconButton/IconButton";
import { useToggle } from "@/hooks/useToggle";
import BottomSheet from "@/components/common/bottomSheet/BottomSheet";
import EditIcon from "@/components/common/icons/EditIcon";
import DeleteIcon from "@/components/common/icons/DeleteIcon";
import StickButton from "@/components/common/stickyButton/StickyButton";
import { useChargerDetail } from "@/hooks/queries/charger";
import PhotoSlider from "@/components/common/photoSlider/PhotoSlider";

export default function ChargerDetail() {
    const navigate = useNavigate();
    const { open, close, isOpen } = useToggle(false);
    const { id } = useParams();
    const chargerId = Number(id);
    const { data, isLoading, isError } = useChargerDetail(chargerId, 1);
    const [charger, setCharger] = useState<Charger>();

    useEffect(() => {
        const newData = { ...data, chargerRole: "개인", content : "내용이 들어가는 자리입니다. 내용이 들어가는 자리입니다. 내용이 들어가는 자리입니다. 내용이 들어가는 자리입니다. 내용이 들어가는 자리입니다. 내용이 들어가는 자리입니다. 내용이 들어가는 자리입니다." , chargerImageList : ["https://www.istockphoto.com/photo/car-rental-business-transportation-service-gm1688124066-537244903?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fko%2Fimages%2Fsearch%2F%25EC%25B0%25A8%2F&utm_term=%EC%B0%A8","https://www.istockphoto.com/photo/cars-for-sale-stock-lot-row-gm1478431022-506701439?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fko%2Fimages%2Fsearch%2F%25EC%25B0%25A8%2F&utm_term=%EC%B0%A8"],myChargerCheck : false};
        if (!isLoading && !isError) {
            setCharger(newData);
        }
    }, [data, isLoading, isError]);

    function handleDelete() {
        console.log(`충전소 삭제 api요청`);
    }

    function handleEmptyLike() {
        console.log(`즐겨찾기 추가 api요청`);
    }

    function handleLike() {
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
    console.log(charger)

    return (
        <S.ChargerContainer>
            <TopNavigationBar
                leftBtn={<IconButton icon="arrowDown" />}
                text={charger?.chargerName}
                rightBtn={
                    (
                        charger?.myChargerCheck && <MoreIconButton />
                    ) || (
                        charger?.favorite ? <LikeButton /> : <EmptyLikeButton />
                    )
                }
            />
            <S.ChargerOverview>
                <S.ChargerCompany>회사명</S.ChargerCompany>
                <S.ChargerStatus>
                    <ChargingRoleCard role={charger?.chargerRole || ""} />
                    <RatingWithStar rating={charger?.avgRate} />
                </S.ChargerStatus>
                <S.Title>{charger?.chargerName}</S.Title>
                <S.ChargerAddress>{charger?.chargerLocation}</S.ChargerAddress>
            </S.ChargerOverview>
            <S.ChargerInfo>
                <S.Title>충전기 정보</S.Title>
                <table>
                    <thead>
                        <tr>
                            <th>상태</th>
                            <th>종류</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ChargerStatus
                                    status={charger?.chargerStatus || ""}
                                />
                            </td>
                            <td>
                                {charger?.chargerTypeList.map((chargerType) => {
                                    return (
                                        <span key={chargerType.id}>
                                            {chargerType.type}
                                        </span>
                                    );
                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </S.ChargerInfo>
            <S.ChargerPrice>
                <S.Title>충전 요금</S.Title>
                <S.PriceInfo>
                    <div className="charging-speed row">
                        {charger?.chargingSpeed}
                    </div>
                    <div className="price-member row">
                        {charger?.chargerRole === "공공" ? (
                            <>
                                <div>회원가</div>
                                <div>비회원가</div>
                            </>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className="price-rate row">
                        {charger?.chargerRole === "공공" ? (
                            <>
                                <div>
                                    <span>{charger?.memberPrice}원</span> /kWh
                                </div>
                                <div>
                                    <span>{charger?.nonmemberPrice}원</span>{" "}
                                    /kWh
                                </div>
                            </>
                        ) : (
                            <div>
                                <span>{charger?.personalPrice}원</span> /kWh
                            </div>
                        )}
                    </div>
                </S.PriceInfo>
            </S.ChargerPrice>
            <S.StationInfo>
            {charger?.chargerRole === "공공" ? (
                <></>
            ) : (
                <div>
                    <S.Title>충전소 정보</S.Title>
                    <S.StationContent>
                    <PhotoSlider imgs={charger?.chargerImageList || []} category="charging"/>
                    <p>{charger?.content}</p>
                    </S.StationContent>
                </div>
            )}
            </S.StationInfo>
            <S.ChargerReview>
                <div className="reviewTitle">
                    <S.Title>충전소 리뷰 </S.Title>
                    <Link to={`/charger/${charger?.chargerId}/reviews`}>
                        전체보기
                        <ArrowRightIcon />
                    </Link>
                </div>

                {charger?.reviewList && charger?.reviewList.length !== 0 ? (
                    charger?.reviewList.map((review) => {
                        return (
                            <ReviewItem
                                key={review.id}
                                date={review.modified_at}
                                address={charger?.chargerName}
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
            {charger?.chargerRole === "개인" ? (
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
