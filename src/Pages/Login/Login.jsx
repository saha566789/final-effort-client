import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login(2).avif'
import useAuth from '../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { toast } from 'react-toastify';

const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('🦄 Wow so easy!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition:" Bounce",
              });
            navigate(from, { replace: true });
        })
    }
    return (
        <div className='mt-3'>
          <Helmet>
            <title>CircuitFlow | Login</title>
        </Helmet>
          <div className="hero Lg:min-h-screen lg:h-[100vh]  h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mt-4">
          <img src={loginImg} alt="" />
          </div>
          {/* form */}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body h-[320px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p><small>New Here?Create an account . <Link className='text-blue-400 text-sm lg:text-lg underline' to="/register">Register</Link> </small></p>
          
            </form>
           <div className='mt-4'>
           <SocialLogin></SocialLogin>
           </div>
      
          </div>
         </div>
      </div>
        </div>
    );
};

export default Login;