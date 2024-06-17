import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../../assets/login(2).avif'
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const { createUser, handleUpdateProfile, reset } = useAuth()
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()

  
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!*_])[A-Za-z\d@#$%^&+=!*_]{6,}$/.test(password)) {
      Swal.fire('Minimum six characters, at least capital letter and special character')
      return;
    }
    createUser(email, password)
      .then(result => {
        handleUpdateProfile(name, photo)
          .then(() => {
            Swal.fire('Your account created successfully');

            const userInfo = {
              name: name,
              email: email
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('user added to the database')
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              })


          })
      })
      .catch(error => {
        Swal.fire(error.message)
      })


  }
  
  return (
   <div>
    <Helmet>
      <title>CircuitFlow | Register</title>
    </Helmet>
     <div className="hero lg:min-h-screen lg:h-0 h-[150vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left mt-4">
          <img src={registerImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body lg:h-[500px]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
            </div>

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
              <button
             
               className="btn btn-primary">Register</button>
            </div>
            <p><small>Already have an account<Link to="/login" className='text-red-700'>Please Login</Link> </small></p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
        
      </div>
    </div>
   </div>
  );
};

export default Register;