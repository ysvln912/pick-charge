import chargerApi from "@/apis/charger";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

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
            return chargerApi.getChargerDetail(id);
        },
    });
    return { data, ...rest };
};

const useFavoritesCharger = () => {
    const { data, ...rest } = useQuery({
        queryKey: ["useFavoritesCharger"],
        queryFn: () => {
            return chargerApi.getFavoritesCharger();
        },
    });
    return { data, ...rest };
};

const useCreateFavorite = () => {

};

export {
    useChargerList,
    useChargerDetail,
    useFavoritesCharger,
    useCreateFavorite,
};
