import * as S from "./ChargerList.style";
import { ChargerProps } from "../chargerMap/ChargerMap";
import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";

export default function ChargerList({ info }: ChargerProps) {
    return (
        <S.ListContainer>
            {info.map((data) => {
                return (
                    <ChargingInfo
                        info={data}
                        like={false}
                        tag={true}
                        border="bottom"
                        path={`/charging-detail/${data.id}`}
                    />
                );
            })}
        </S.ListContainer>
    );
}
