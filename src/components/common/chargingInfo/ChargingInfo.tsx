import ChargingRoleCard from "../chargingRoleCard/ChargingRoleCard";
import BatterErrorIcon from "../icons/BatteryErrorIcon";
import BoltIcon from "../icons/BoltIcon";
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

export default function ChargingInfo({ info }: { info: Charger }) {
    return (
        <S.ChargingContainer>
            <S.ChargingContent>
                <p className="chargingTitle">{info.charger_name}</p>
                <ChargingRoleCard role={info.charger_role} />
            </S.ChargingContent>
            <S.ChargingAddress>{info.charger_location}</S.ChargingAddress>
            <S.ChargingStatus
                className={
                    info.status === "이용가능" ? "available" : "restriction"
                }>
                {info.status === "이용가능" ? (
                    <BoltIcon />
                ) : (
                    <BatterErrorIcon />
                )}
                <p>{info.status}</p>
                <p className="type">{info.charger_type}</p>
            </S.ChargingStatus>
        </S.ChargingContainer>
    );
}
