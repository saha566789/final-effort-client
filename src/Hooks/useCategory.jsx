import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCategory = () => {
    const {data: category = [], isPending: loading, refetch} = useQuery({
        queryKey: ['category'], 
        queryFn: async() =>{
            const res = await useAxiosPublic.get('/category');
            return res.data;
        }
    })


    return [category, loading, refetch]
};

export default useCategory;