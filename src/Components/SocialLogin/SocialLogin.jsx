
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
        <div className="border lg:w-60 w-48 lg:ml-14 ml-12 mb-3 border-black rounded-lg mt-2">
      
            <div>
                <button onClick={handleGoogleSignIn} className="">
                    
                    <img src="https://i.ibb.co/thqtLkd/Logo-google-icon-PNG.png" alt="" className="w-6 lg:ml-24 ml-20 mt-1" />
                  
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;