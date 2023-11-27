import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCategory = () => {
    const {data: category = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'], 
        queryFn: async() =>{
            const res = await useAxiosPublic.get('/menu');
            return res.data;
        }
    })


    return [category, loading, refetch]
};

export default useCategory;