import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useManger = () => {
    const { user, loading } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: isManager, isPending: isManagerLoading } = useQuery({
        queryKey: [user?.email, 'isManager'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is Manager', user)
            const res = await axiosPublic.get(`/user/Manager/${user.email}`);
            // console.log(res.data);
            return res.data?.manager;
        }
    })
    return [isManager, isManagerLoading]
};



export default useManger;