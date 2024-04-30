import * as S from "./ChargerStatus.style"
import BoltIcon from "../icons/BoltIcon";
import BatterErrorIcon from "../icons/BatteryErrorIcon";

interface ChargerStatusProps {
    status: string;
}

export default function ChargerStatus({ status }: ChargerStatusProps) {
    const statusType = status === "이용가능" ? "available" : "restriction";
    return (
        <S.StatusContainer status={statusType}>
            {statusType === "available" ? <BoltIcon /> : <BatterErrorIcon />}
            <p>{status}</p>
        </S.StatusContainer>
    );
}
