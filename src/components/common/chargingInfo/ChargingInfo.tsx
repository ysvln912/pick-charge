import * as S from "./ChargingInfo.style";
import ChargingRoleCard from "../chargingRoleCard/ChargingRoleCard";
import IconButton from "../iconButton/IconButton";
import RatingWithStar from "../ratingWithStar/RatingWithStar";
import ChargerStatus from "../chargerStatus/ChargerStatus";
import { Charger } from "@/types/charger";

// export interface Charger {
//     id: number;
//     charger_location: string;
//     charger_name: string;
//     charging_speed: string;
//     status: "이용가능" | "이용자제한";
//     latitude: number;
//     longitude: number;
//     content: string;
//     avg_rate: string;
//     company_name: string;
//     member_price: number;
//     nonmember_price: number;
//     personal_price: number;
//     charger_type: string;
//     charger_role: "개인" | "공공";
// }

export interface ChargingInfoProps {
    info: Charger;
    border: "full" | "bottom";
    like: boolean;
    tag: boolean;
    onClick: () => void;
}

export default function ChargingInfo({info, border, like, tag, onClick}: ChargingInfoProps) {
    return (
        <S.ChargingContainer border={border} onClick={onClick}>
            <div>
                <S.ChargingContent>
                    <p className="chargingTitle">{info.chargerName}</p>
                    {tag && (
                        <ChargingRoleCard role={info.chargerRole} />
                    )}
                    <RatingWithStar rating={info.avgRate} />
                </S.ChargingContent>
                <S.ChargingAddress>
                    {info.chargerLocation}
                </S.ChargingAddress>
                <S.ChargingStatus>
                    <ChargerStatus status={info.chargerStatus} />
                    <p className="type">{info.chargerTypeList.map((type)=>{
                        return <span key={type.id}>{type.type}</span>
                    })}</p>
                </S.ChargingStatus>
            </div>
            {like && (
                <div className="iconDiv">
                    <IconButton icon="like" />
                </div>
            )}
        </S.ChargingContainer>
    );
}
