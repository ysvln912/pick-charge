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
        <div>
            <S.ChargingTitle>
                <p>{info.charger_name}</p>
                <div>{info.charger_role}</div>
                <div>별점</div>
            </S.ChargingTitle>
            <S.ChargingAddress>{info.charger_location}</S.ChargingAddress>
            <S.ChargingStatus>
                {info.status === "이용가능" ? <BoltIcon /> : <BatterErrorIcon />}
                <p>{info.status}</p>
                <p className="type">{info.charger_type}</p>
            </S.ChargingStatus>
            
        </div>
    );
}
