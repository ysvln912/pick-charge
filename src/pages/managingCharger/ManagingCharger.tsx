import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";
import IconButton from "@/components/common/iconButton/IconButton";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import { Charger } from "@/types";
import { useNavigate } from "react-router-dom";
import * as S from "./ManagingCharger.style";
import { useQuery } from "@tanstack/react-query";
import { SAMPLE_USER_INFO } from "@/constants/myCharger";
import myChargerApi from "@/apis/myCharger";

export default function ManagingCharger() {
  const navigate = useNavigate();
  const { data } = useQuery<Charger[], Error>({
    queryKey: ["myChargerList", SAMPLE_USER_INFO.userId],
    queryFn: myChargerApi.getMyCharger,
  });

  console.log(data);

  return (
    <S.Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" onClick={() => navigate(-1)} />}
        text="충전기 관리"
      />
      {data && data.length > 0 ? (
        <>
          <S.Title>내가 관리하는 {data.length}개의 충전기</S.Title>
          {data.map((data) => {
            return (
              <ChargingInfo
                info={data}
                like={false}
                tag={false}
                border="bottom"
                onClick={() => navigate(`/charger/detail/${data.chargerId}`)}
              />
            );
          })}
        </>
      ) : (
        <S.NoInfo>등록한 충전기가 없습니다</S.NoInfo>
      )}
    </S.Container>
  );
}
