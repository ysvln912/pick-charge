import ChargingRoleCard from "../chargingRoleCard/ChargingRoleCard";
import BatterErrorIcon from "../icons/BatteryErrorIcon";
import BoltIcon from "../icons/BoltIcon";
import StarIcon from "../icons/StarIcon";
import LikeIconBtn from "../iconButtons/LikeIconBtn";
import * as S from "./ChargingInfo.style";

export interface Charger {
    id: number;
    charger_location: string;
    charger_name: string;
    charging_speed: string;
    status: "이용가능" | "이용자제한";
    latitude: number;
    longitude: number;
    content: string;
    avg_rate: number;
    company_name: string;
    member_price: number;
    nonmember_price: number;
    personal_price: number;
    charger_type: string;
    charger_role: "개인" | "공공";
}

export interface ChargingInfoProps {
    info : Charger;
    border : "full" | "bottom";
    like : boolean;
    tag : boolean;
}

export default function ChargingInfo(props : ChargingInfoProps) {
    return (
        <S.ChargingContainer className={props.border==="full"? "full" : "bottom"}>
            <div>
                <S.ChargingContent>
                    <p className="chargingTitle">{props.info.charger_name}</p>
                    {props.tag && <ChargingRoleCard role={props.info.charger_role} />}
                    <div className="starDiv">
                        <StarIcon />
                        <p>{props.info.avg_rate}</p>
                    </div>
                </S.ChargingContent>
                <S.ChargingAddress>{props.info.charger_location}</S.ChargingAddress>
                <S.ChargingStatus
                    className={
                        props.info.status === "이용가능" ? "available" : "restriction"
                    }>
                    {props.info.status === "이용가능" ? (
                        <BoltIcon />
                    ) : (
                        <BatterErrorIcon />
                    )}
                    <p>{props.info.status}</p>
                    <p className="type">{props.info.charger_type}</p>
                </S.ChargingStatus>
            </div>
            {props.like && <div className="iconDiv"><LikeIconBtn /></div>}
        </S.ChargingContainer>
    );
}
