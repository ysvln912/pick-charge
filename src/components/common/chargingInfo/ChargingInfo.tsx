import { Link } from "react-router-dom";

import * as S from "./ChargingInfo.style";
import ChargingRoleCard from "../chargingRoleCard/ChargingRoleCard";
import BatterErrorIcon from "../icons/BatteryErrorIcon";
import BoltIcon from "../icons/BoltIcon";
import IconButton from "../iconButton/IconButton";
import RatingWithStar from "../ratingWithStar/RatingWithStar";
import ChargerStatus from "../chargerStatus/ChargerStatus";

export interface Charger {
    id: number;
    charger_location: string;
    charger_name: string;
    charging_speed: string;
    status: "이용가능" | "이용자제한";
    latitude: number;
    longitude: number;
    content: string;
    avg_rate: string;
    company_name: string;
    member_price: number;
    nonmember_price: number;
    personal_price: number;
    charger_type: string;
    charger_role: "개인" | "공공";
}

export interface ChargingInfoProps {
    info: Charger;
    border: "full" | "bottom";
    like: boolean;
    tag: boolean;
    onClick: () => void;
}

export default function ChargingInfo(props: ChargingInfoProps) {
    return (
        <S.ChargingContainer border={props.border} onClick={props.onClick}>
            <div>
                <S.ChargingContent>
                    <p className="chargingTitle">{props.info.charger_name}</p>
                    {props.tag && (
                        <ChargingRoleCard role={props.info.charger_role} />
                    )}
                    <RatingWithStar rating={props.info.avg_rate} />
                </S.ChargingContent>
                <S.ChargingAddress>
                    {props.info.charger_location}
                </S.ChargingAddress>
                <S.ChargingStatus>
                    <ChargerStatus status={props.info.status} />
                    <p className="type">{props.info.charger_type}</p>
                </S.ChargingStatus>
            </div>
            {props.like && (
                <div className="iconDiv">
                    <IconButton icon="like" />
                </div>
            )}
        </S.ChargingContainer>
    );
}
