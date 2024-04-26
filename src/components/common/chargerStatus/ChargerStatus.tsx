import * as S from "./ChargerStatus.style"
import BoltIcon from "../icons/BoltIcon";
import BatterErrorIcon from "../icons/BatteryErrorIcon";

interface ChargerStatusProps {
    status: string;
}

export default function ChargerStatus({ status }: ChargerStatusProps) {
    return (
        <S.StatusContainer status={status === "이용가능" ? "available" : "restriction"}>
            {status === "이용가능" ? <BoltIcon /> : <BatterErrorIcon />}
            <p>{status}</p>
        </S.StatusContainer>
    );
}
