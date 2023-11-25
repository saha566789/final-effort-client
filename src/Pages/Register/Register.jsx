import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../../assets/login(2).avif'
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser,handleUpdateProfile} = useAuth()
    const navigate = useNavigate()
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email, password);
        if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!*_])[A-Za-z\d@#$%^&+=!*_]{6,}$/.test(password)){
            Swal.fire('Minimum six characters, at least capital letter and special character')
              return;
          }
          createUser(email,password)
          .then(result => {
              handleUpdateProfile(name, photo)
                  .then(() => {
                    Swal.fire('Your account created successfully');
                      navigate('/')
  
                  })
          })
          .catch(error => {
            Swal.fire(error.message)
          })
  
        
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <img src={registerImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input  type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p><small><Link to="/login">Already have an account</Link> </small></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;