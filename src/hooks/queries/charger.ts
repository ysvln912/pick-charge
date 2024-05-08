import chargerApi from "@/apis/charger";
import { useQuery } from "@tanstack/react-query";

const useChargerList = (location: string) => {
    const { data, ...rest } = useQuery({
        queryKey: ["getChargerList", location],
        queryFn: () => {
            return chargerApi.getChargerList(location);
        },
        enabled: !!location,
    });
    return { data, ...rest };
};

const useChargerDetail = (id: number, userId: number) => {
    const { data, ...rest } = useQuery({
        queryKey: ["getChargerDetail", id],
        queryFn: () => {
            return chargerApi.getChargerDetail(id, userId);
        },
    });
    return { data, ...rest };
};

const useFavoritesCharger = (userId: number) => {
    const { data, ...rest } = useQuery({
        queryKey: ["useFavoritesCharger", userId],
        queryFn: () => {
            return chargerApi.getFavoritesCharger(userId);
        },
    });
    return { data, ...rest };
};

export { useChargerList, useChargerDetail, useFavoritesCharger };
