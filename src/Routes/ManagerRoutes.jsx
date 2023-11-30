import { Navigate, useLocation } from "react-router-dom";
import useManger from "../Hooks/useManger";
import useAuth from "../Hooks/useAuth";


const ManagerRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const [isManager ,isManagerLoading] = useManger();
    const location = useLocation();

    if (loading || isManagerLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isManager) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default ManagerRoutes;