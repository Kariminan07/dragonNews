import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Login = () => {
    const {userLogin, setUser}=useContext(AuthContext);
    const [error,setError] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const handlesubmit = (e) =>{
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        userLogin(email,password)
        .then(result => {
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state :'/')
        })
        .catch((err) =>{
            setError({...err , login: err.code});
        })

    }
    return (
        <div className='min-h-[100vh]  flex  justify-center items-center'>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 rounded-none">
                        <h2 className='text-2xl text-center font-semibold'>Login your account</h2>
                        <form onSubmit={handlesubmit} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                name ="email"
                                type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                name='password'
                                type="password" placeholder="password" className="input input-bordered" required />
                                {
                                    error.login &&     <label className="label text-sm text-red-600">
                                   {error.login}
                                </label>
                                }
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-none">Login</button>
                            </div>
                        </form>
                        <p className=" text-center font-semibold"> Don't have Account?<Link to="/auth/register">Register</Link></p>
                    </div>
                </div>
       
        
    );
};

export default Login;