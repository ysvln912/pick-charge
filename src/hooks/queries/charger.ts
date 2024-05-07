import chargerApi from "@/apis/charger";
import { useQuery } from "@tanstack/react-query";

const useChargerList = ( location:string) => {
    const { data, ...rest } = useQuery({
        queryKey: ["getChargerList",location],
        queryFn: () => {
            return chargerApi.getChargerlist(location);
        },
        enabled: !!location,
    });
    return { data, ...rest };
};

const useChargerDetail = (id : number, userId : number)=>{
    const { data, ...rest } = useQuery({
        queryKey: ["getChargerDetail",id],
        queryFn: () => {
            return chargerApi.getChargerDetail(id, userId);
        },

    });
    return { data, ...rest };
}


export { useChargerList, useChargerDetail}