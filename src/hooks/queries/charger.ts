import chargerApi from "@/apis/charger";
import { useQuery } from "@tanstack/react-query";

const useChargerList = (location: string) => {
    const { data, ...rest } = useQuery({
        queryKey: ["getChargerList", location],
        queryFn: () => {
            return chargerApi.getChargerlist(location);
        },
    });
    return { data, ...rest };
};


export { useChargerList}