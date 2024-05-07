import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";
import IconButton from "@/components/common/iconButton/IconButton";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import { Charger } from "@/types";
import { useNavigate } from "react-router-dom";
import * as S from "./ManagingCharger.style";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { SAMPLE_USER_INFO } from "@/constants/myCharger";

export default function ManagingCharger() {
  const navigate = useNavigate();
  const getMyChargerlist = async (
    userId: string,
    token: string
  ): Promise<Charger[]> => {
    const url = `/api/chargers/users/${userId}`;
    try {
      const res = await axios({
        method: "get",
        url: url,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };
  const { data } = useQuery<Charger[], Error>({
    queryKey: ["myChargerList", SAMPLE_USER_INFO.userId],
    queryFn: () =>
      getMyChargerlist(SAMPLE_USER_INFO.userId, SAMPLE_USER_INFO.token),
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
                onClick={() => navigate(`/charger/${data.chargerId}`)}
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
