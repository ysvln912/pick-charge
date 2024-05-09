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
import chargerApi from "@/apis/charger";
import useCheckUserInfo from "@/hooks/useCheckUserInfo";
import { Confirm } from "@/components/common/confirmDialog/ConfirmDialog.style";
import ConfirmDialog from "@/components/common/confirmDialog/ConfirmDialog";

export default function ChargerDetail() {
    const navigate = useNavigate();
    const { open, close, isOpen } = useToggle(false);
    const { open : loginOpen , close :loginClose, isOpen:loginIsOpen } = useToggle(false);
    const { id } = useParams();
    const chargerId = Number(id);
    const { user } = useCheckUserInfo();
    const { data, isLoading, isError } = useChargerDetail(chargerId);
    const [charger, setCharger] = useState<Charger>();
    const [isPublic, setIsPublic] = useState(true);
    const [imageList, setImageList] = useState<string[]>([]);

    useEffect(() => {
        if (!isLoading && !isError) {
            data.chargerImageList.forEach((img: any) => {
                const newImageList = imageList.concat(img.imageUrl);
                setImageList(newImageList);
            });

            setCharger(data);
            if (data.chargerRole === "개인") {
                setIsPublic(false);
            }
        }
    }, [data, isLoading, isError]);

    function handleLike() {
        if (charger) {
            chargerApi.deleteFavorite(chargerId).then((res) => {
                if (res.status === 200) {
                    const newCharger: Charger = { ...charger, favorite: false };
                    setCharger(newCharger);
                }
            });
        }
    }

    function handleEmptyLike() {
        if (charger) {
            chargerApi.createFavorite(chargerId).then((res) => {
                if (res.status === 201) {
                    const newCharger: Charger = { ...charger, favorite: true };
                    setCharger(newCharger);
                }
            });
        }
    }

    function handleDelete() {
        chargerApi.deleteCharger(chargerId).then(() => {
            navigate("/managing-charger");
        });
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
    return (
        <S.ChargerContainer>
            <TopNavigationBar
                leftBtn={
                    <IconButton
                        icon="arrowDown"
                        onClick={() => {
                            navigate(-1);
                        }}
                    />
                }
                text={charger?.chargerName}
                rightBtn={
                    (charger?.myChargerCheck && <MoreIconButton />) ||
                    (charger?.favorite ? <LikeButton /> : <EmptyLikeButton />)
                }
            />
            <S.ChargerOverview>
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
                        {isPublic ? (
                            <>
                                <div>회원가</div>
                                <div>비회원가</div>
                            </>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className="price-rate row">
                        {isPublic ? (
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

            {isPublic ? (
                <></>
            ) : (
                <S.StationInfo>
                    <S.Title>충전소 정보</S.Title>
                    <S.StationContent>
                        {imageList.length !== 0 && (
                            <PhotoSlider imgs={imageList} category="charging" />
                        )}
                        <p>{charger?.content}</p>
                    </S.StationContent>
                </S.StationInfo>
            )}

            <S.ChargerReview>
                <div className="reviewTitle">
                    <S.Title>충전소 리뷰 </S.Title>
                    <Link to={`/charger/${charger?.chargerId}/reviews`}>
                        전체보기
                        <ArrowRightIcon />
                    </Link>
                </div>

                {charger?.reviewList && charger?.reviewList.length !== 0 ? (
                    charger?.reviewList.slice(0, 3).map((review) => {
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
            {!charger?.myChargerCheck && !isPublic ? (
                <StickButton
                    text="문의하기"
                    onClick={() => {
                        navigate(`/chat-list/`)
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
                                navigate(`/charger/${chargerId}/edit`);
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
