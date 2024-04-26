import { ISearchResult } from "@/pages/registerCharger/RegisterCharger";

export const searchAddress = async (
  debouncedKeyword: string = "",
  callback: React.Dispatch<React.SetStateAction<ISearchResult[]>>
) => {
  if (debouncedKeyword === "") {
    return;
  }
  const URL = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${debouncedKeyword}&size=3`;
  try {
    const res = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_API_KEY}`,
      },
    });
    const data = await res.json();
    callback(data.documents);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
