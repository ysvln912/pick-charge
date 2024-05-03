import ChargingInfo from "@/components/common/chargingInfo/ChargingInfo";
import IconButton from "@/components/common/iconButton/IconButton";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import { Charger } from "@/types";
import { useNavigate } from "react-router-dom";
import * as S from "./ManagingCharger.style";
import { useEffect, useState } from "react";
import myChargerApi from "@/apis/myCharger";

export default function ManagingCharger() {
  const navigate = useNavigate();
  const [myChargerList, setMyChargerList] = useState<Charger[]>([]);
  const USER_ID = "1";
  useEffect(() => {
    if (!USER_ID) {
      return;
    }
    myChargerApi.getMyChargerlist(USER_ID).then((res: Charger[]) => {
      // 네트워크 요청 성공한 경우
      if (res) {
        setMyChargerList(res);
      }
      // 네트워크 요청 실패한 경우
      setMyChargerList(sampleData);
    });
  }, []);

  return (
    <S.Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" />}
        text="충전기 관리"
      />
      <S.Title>내가 관리하는 {myChargerList.length}개의 충전기</S.Title>
      <div>
        {myChargerList?.length > 1 &&
          myChargerList.map((data) => {
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
      </div>
    </S.Container>
  );
}

const sampleData: Charger[] = [
  {
    chargerId: 259682,
    chargerLocation: "경기도 부천시 소사로 201번길 25",
    chargerName: "대현주택 705호",
    latitude: 37.4762374,
    longitude: 126.7941637,
    chargerTypeList: [
      {
        id: 274962,
        type: "D타입",
      },
      {
        id: 274963,
        type: "E타입",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259683,
    chargerLocation: "경기도 부천시 소사로 201번길 25",
    chargerName: "대현주택 705호",
    latitude: 37.4762374,
    longitude: 126.7941637,
    chargerTypeList: [
      {
        id: 274964,
        type: "D타입",
      },
      {
        id: 274965,
        type: "E타입",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259684,
    chargerLocation: "경기도 부천시 소사로 201번길 25",
    chargerName: "대현주택 705호",
    latitude: 37.4762374,
    longitude: 126.7941637,
    chargerTypeList: [
      {
        id: 274966,
        type: "D타입",
      },
      {
        id: 274967,
        type: "E타입",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259685,
    chargerLocation: "경기도 부천시 소사로 201번길 25",
    chargerName: "태평역 수인분당선",
    latitude: 37.4762374,
    longitude: 126.7941637,
    chargerTypeList: [
      {
        id: 274968,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259686,
    chargerLocation: "경기 부천시 원미구 조마루로 2",
    chargerName: "태평역 수인분당선",
    latitude: 37.4999701,
    longitude: 126.7442354,
    chargerTypeList: [
      {
        id: 274969,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259687,
    chargerLocation: "경기도 부천시 소사로 201번길 25",
    chargerName: "대현주택 705호",
    latitude: 37.4762374,
    longitude: 126.7941637,
    chargerTypeList: [
      {
        id: 274970,
        type: "D타입",
      },
      {
        id: 274971,
        type: "E타입",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259688,
    chargerLocation: "서울 용산구 한강대로 405",
    chargerName: "서울역",
    latitude: 37.5548376,
    longitude: 126.9717326,
    chargerTypeList: [
      {
        id: 274972,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259689,
    chargerLocation: "경기 성남시 수정구 수진동",
    chargerName: "서울역",
    latitude: 37.438569,
    longitude: 127.139015,
    chargerTypeList: [
      {
        id: 274973,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259690,
    chargerLocation: "경기 성남시 수정구 수진동",
    chargerName: "서울역",
    latitude: 37.438569,
    longitude: 127.139015,
    chargerTypeList: [
      {
        id: 274974,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259691,
    chargerLocation: "경기 성남시 수정구 수진동",
    chargerName: "태평역사거리",
    latitude: 37.438569,
    longitude: 127.139015,
    chargerTypeList: [
      {
        id: 274975,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259692,
    chargerLocation: "경기 성남시 수정구 수진동",
    chargerName: "태평역사거리",
    latitude: 37.438569,
    longitude: 127.139015,
    chargerTypeList: [
      {
        id: 274976,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259693,
    chargerLocation: "경기 성남시 수정구 성남대로 1229",
    chargerName: "태평역사거리",
    latitude: 37.4398906,
    longitude: 127.1276717,
    chargerTypeList: [
      {
        id: 274977,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259694,
    chargerLocation: "경기 성남시 수정구 성남대로 1229",
    chargerName: "태평역사거리",
    latitude: 37.4398906,
    longitude: 127.1276717,
    chargerTypeList: [
      {
        id: 274978,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259695,
    chargerLocation: "경기 성남시 수정구 성남대로 1229",
    chargerName: "태평역사거리",
    latitude: 37.4398906,
    longitude: 127.1276717,
    chargerTypeList: [
      {
        id: 274979,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259696,
    chargerLocation: "경기도 부천시 소사로 201번길 25",
    chargerName: "대현주택 705호",
    latitude: 37.4762374,
    longitude: 126.7941637,
    chargerTypeList: [
      {
        id: 274980,
        type: "D타입",
      },
      {
        id: 274981,
        type: "E타입",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259697,
    chargerLocation: "서울 용산구 한강대로 405",
    chargerName: "서울역",
    latitude: 37.5548376,
    longitude: 126.9717326,
    chargerTypeList: [
      {
        id: 274982,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
  {
    chargerId: 259698,
    chargerLocation: "서울 용산구 한강대로 405",
    chargerName: "서울역",
    latitude: 37.5548376,
    longitude: 126.9717326,
    chargerTypeList: [
      {
        id: 274983,
        type: "DC콤보",
      },
    ],
    chargerRole: "개인",
    avgRate: 0,
    chargerStatus: "이용가능",
  },
];
