import { ChargerStation } from "@/types"
import * as S from "./ChargerStationSummary.style"

interface SummaryProps {
    chargerStation : ChargerStation;
    open : ()=> void;
}

export default function ChagerStationSummary (
    {chargerStation, open} : SummaryProps
) {
    return <S.SummaryContainer onClick={open}>
        <S.DetailTitle>{chargerStation.chargerName}</S.DetailTitle>
                    <S.DetailLocation>
                        {chargerStation.chargerLocation}
                    </S.DetailLocation>
                    <S.DetailLocation>
                        {chargerStation.chargers.length}개의 충전기가 있습니다.
                    </S.DetailLocation>
    </S.SummaryContainer>
}