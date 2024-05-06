import chargerApi from "@/apis/charger";
import { useQuery } from "@tanstack/react-query";

const useChargerList = ( filter:string) => {
    const { data, ...rest } = useQuery({
        queryKey: ["getChargerList",filter],
        queryFn: () => {
            return chargerApi.getChargerlist(filter);
        },
        enabled: !!filter,
    });
    return { data, ...rest };
};


export { useChargerList}