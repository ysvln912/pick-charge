import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  IChargerInfo,
  IErrors,
  ISearchResult,
} from "../registerCharger/RegisterCharger";
import { useDebounce } from "@/hooks/useDebounce";
import * as S from "./ChargerEdit.style";
import { searchAddress } from "@/apis/kakaoSearchAddress";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import IconButton from "@/components/common/iconButton/IconButton";
import SearchInput from "@/components/common/searchInput/SearchInput";
import SearchResultItem from "@/components/pages/registerCharger/searchResultItem/SearchResultItem";
import DetailedAddress from "@/components/pages/registerCharger/detailedAddress/DetailedAddress";
import Label from "@/components/common/label/Label";
import SpeedRadioBtn from "@/components/pages/registerCharger/speedRadioBtn/SpeedRadioBtn";
import FareInput from "@/components/pages/registerCharger/fareInput/FareInput";
import SelectCharger from "@/components/common/selectCharger/SelectCharger";
import StickButton from "@/components/common/stickyButton/StickyButton";
import Textarea from "@/components/common/textarea/Textarea";
import PhotoRegister from "@/components/common/photoRegister/PhotoRegister";

export default function ChargerEdit() {
  // Todo: RegisterCharger 컴포넌트랑 중복 코드 줄이기
  // Todo: image 값 가져오기
  // Todo: 작성완료 시 충전소 상세 페이지로 이동
  // Todo: useLocation으로 유저 id, 충전기 id 값 받아오기
  const TEST_INFO = {
    chargerId: "259701",
    userId: "102",
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcm5hbWUiOiLsnoTsi5zsnKDsoIAiLCJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTcxNDg5NzU1MCwiZXhwIjoxNzE0OTU4MDMwfQ.IEKVxpifThjbxmdxyEXCq9Rr1csfcd-Rw9m39mvJdA4",
  };

  const getChargerEdit = async (
    chargerId: string,
    userId: string,
    token: string
  ) => {
    const url = `/api/chargers/${chargerId}/users/${userId}/edit-from`;
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
      return {};
    }
  };

  const { data } = useQuery({
    queryKey: ["chargerInfo", TEST_INFO.userId, TEST_INFO.chargerId],
    queryFn: () =>
      getChargerEdit(TEST_INFO.chargerId, TEST_INFO.userId, TEST_INFO.token),
  });

  const [chargerInfo, setChargerInfo] = useState<IChargerInfo>({
    address: {
      name: "",
      location: "",
    },
    keyword: "",
    detailed: "",
    speed: "",
    fare: "",
  });
  const [chargerType, setChargerType] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
  const debouncedKeyword = useDebounce(chargerInfo.keyword);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<IErrors>({
    address: { isError: false, errorMessage: "" },
    fare: { isError: false, errorMessage: "" },
    chargerType: { isError: false, errorMessage: "" },
  });

  console.log(data);

  useEffect(() => {
    if (data) {
      setChargerInfo({
        address: {
          name: data.chargerName,
          location: data.chargerLocation,
        },
        keyword: data.chargerName,
        detailed: "",
        speed: data.chargingSpeed,
        fare: data.personalPrice,
      });
      setChargerType(data.chargerTypeList[0].type);
      setContent(data.content);
    }
  }, [data]);

  const updateSearchItem = (name: string, location: string) => {
    setChargerInfo((info) => ({
      ...info,
      keyword: name,
      address: { name, location },
    }));
    setErrors((prev) => ({
      ...prev,
      address: { ...prev.address, isError: false },
    }));
    setShow(false);
  };

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === "keyword") {
      setShow(true);
      setChargerInfo((prev) => ({
        ...prev,
        address: { name: "", location: "" },
      }));
    }
    if (name === "keyword" && value === "") {
      setShow(false);
    }
    if (name === "fare" && value !== "") {
      setErrors((prev) => ({
        ...prev,
        fare: { ...prev.fare, isError: false },
      }));
    }
    if (name === "speed") {
      setChargerType(null);
    }
    setChargerInfo((info) => ({ ...info, [name]: value }));
  };

  const updateChargerType = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    if (value !== "") {
      setErrors((prev) => ({
        ...prev,
        chargerType: { ...prev.chargerType, isError: false },
      }));
    }
    setChargerType(value);
  };

  const updateContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setContent(value);
  };

  const updatePhoto = (photo: File) => {
    setPhotos((prev) => [...prev, photo]);
  };
  const deletePhoto = (photos: File[]) => {
    setPhotos(photos);
  };

  useEffect(() => {
    searchAddress(debouncedKeyword, setSearchResults);
  }, [debouncedKeyword]);

  function createFormData() {
    const formData = new FormData();

    const jsonData = {
      chargerLocation: chargerInfo.address.location,
      chargerName: chargerInfo.address.name,
      chargingSpeed: chargerInfo.speed,
      content: content,
      personalPrice: parseInt(chargerInfo.fare),
      chargerTypeDtoList: [{ type: chargerType }],
    };

    formData.append("chargerUpdate", JSON.stringify(jsonData));
    photos.forEach((photo) => {
      formData.append("imgUrl", photo);
    });

    return formData;
  }

  const updateCharger = async () => {
    const url = `/api/chargers/${TEST_INFO.chargerId}/users/${TEST_INFO.userId}`;
    const formData = createFormData();
    const token = TEST_INFO.token;

    try {
      const res = await axios({
        method: "patch",
        url: url,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onSubmitValue = () => {
    if (chargerInfo.address.location === "") {
      setErrors((prev) => ({
        ...prev,
        address: { isError: true, errorMessage: "필수 입력 항목입니다." },
      }));
      return;
    }
    if (chargerInfo.fare === "") {
      setErrors((prev) => ({
        ...prev,
        fare: { isError: true, errorMessage: "필수 입력 항목입니다." },
      }));
      return;
    }
    if (chargerType === null) {
      setErrors((prev) => ({
        ...prev,
        chargerType: { isError: true, errorMessage: "필수 입력 항목입니다." },
      }));
      return;
    }
    updateCharger();
  };
  return (
    <S.Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" />}
        text="충전소 수정"
      />
      <S.Main>
        <S.ColumnBox>
          <S.Box>
            <SearchInput
              color={errors.address.isError ? "primary" : "default"}
              label="충전소 주소"
              require
              placeholder="충전소 주소를 입력해 주세요."
              error={errors.address.isError}
              errorMessage={errors.address.errorMessage}
              value={chargerInfo.keyword}
              onChange={updateInput}
              name="keyword"
            />
            {show && searchResults.length > 0 && (
              <S.SearchResultsBox>
                {searchResults.map((result) => (
                  <SearchResultItem
                    key={result.id}
                    {...result}
                    onClick={updateSearchItem}
                  />
                ))}
              </S.SearchResultsBox>
            )}
          </S.Box>
        </S.ColumnBox>
        <DetailedAddress
          label="상세 주소"
          placeholder="아파트/건물명 동/호수 층"
          name="detailed"
          value={chargerInfo.detailed ?? ""}
          onChange={updateInput}
        />
        <Label size="lg">충전기 정보</Label>
        <S.ColumnBox>
          <Label size="md" require>
            충전 속도
          </Label>
          <S.RowBox>
            <SpeedRadioBtn
              id="fast"
              value="급속"
              onChange={updateInput}
              selectedOption={chargerInfo.speed}
            />
            <SpeedRadioBtn
              id="slow"
              value="완속"
              onChange={updateInput}
              selectedOption={chargerInfo.speed}
            />
          </S.RowBox>
        </S.ColumnBox>
        <S.ColumnBox>
          <Label size="md" require>
            요금
          </Label>
          <FareInput
            value={chargerInfo.fare ?? ""}
            onChange={updateInput}
            error={errors.fare.isError}
            errorMessage={errors.fare.errorMessage}
          />
        </S.ColumnBox>
        <SelectCharger
          label
          require
          value={chargerType}
          onChange={updateChargerType}
          type={chargerInfo.speed === "급속" ? "fast" : "slow"}
          error={errors.chargerType.isError}
          errorMessage={errors.chargerType.errorMessage}
        />
        <StickButton text="충전기 추가하기" />
        <Textarea
          label="내용"
          placeholder="이용에 대한 상세한 정보 (비용,이용 시간 등)를 작성해 주세요."
          name="content"
          value={content ?? ""}
          onChange={updateContent}
        >
          {content}
        </Textarea>
        <PhotoRegister
          photos={photos}
          updatePhoto={updatePhoto}
          deletePhoto={deletePhoto}
        />
      </S.Main>
      <StickButton onClick={onSubmitValue} text="작성완료"></StickButton>
    </S.Container>
  );
}
