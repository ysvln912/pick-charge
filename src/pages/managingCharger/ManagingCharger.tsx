import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";
import IconButton from "@/components/common/iconButton/IconButton";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import { Charger } from "@/types";
import { useNavigate } from "react-router-dom";
import * as S from "./ManagingCharger.style";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function ManagingCharger() {
  const navigate = useNavigate();

  // Todo: user 전역 데이터 가져오기
  const TEST_USER = {
    id: "102",
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcm5hbWUiOiLsnoTsi5zsnKDsoIAiLCJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTcxNDg5NzU1MCwiZXhwIjoxNzE0OTU4MDMwfQ.IEKVxpifThjbxmdxyEXCq9Rr1csfcd-Rw9m39mvJdA4",
  };

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
    queryKey: ["myChargerList", TEST_USER.id],
    queryFn: () => getMyChargerlist(TEST_USER.id, TEST_USER.token),
  });

  return (
    <S.Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" />}
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
