import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createNewUser, setUser, updateUserProfile}=useContext(AuthContext);
    const [error,setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    const handlesubmit = e =>{
        e.preventDefault();
        
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo ");
        const email = form.get("email");
        const password = form.get("password");
        const invalidNames = ["Ayaz", "Faiyaz", "Mimia", "Sabil","Ayaz Ilahi Mullick","Faiyaz Ahmed","Sal Sabil"];
        
        let hasError = false;
        const newError = {}

        if (invalidNames.includes(name)){
            newError.name =  `Welcome, ${name} Gadha`;
            hasError = false;
        }else if (!name || name.length < 5) {
            newError.name = 'Name must be more than 5 characters long';
            hasError=true;
        }

        if(!password || password.length <6){
            newError.password = "Please Password must be at least 6 characters long";
            hasError = true;
        }

        if (hasError){
            setError(newError);
            return;
        }
        setError({});

        createNewUser(email,password)
        .then (result => {
            const user = result.user;
            setUser(user)
            updateUserProfile({displayName: name, photoURL:photo})
            .then(() => {
                navigate('/');
            })
            .catch(err =>{
                console.log(err)
            });
          
        })
        .catch((error) =>{
            console.log(error.message);
        })

    }
    return (
        <div>
             <div className='min-h-[100vh]  flex  justify-center items-center'>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 rounded-none">
                        <h2 className='text-2xl text-center font-semibold'>Register your account</h2>
                        <form onSubmit={handlesubmit} className="card-body ">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            {
                                error.name && (<label className="label text-xs text-rose-500">
                                    {error.name}
                                </label>)
                            }
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                {
                                error.password && (<label className="label text-xs text-rose-500">
                                    {error.password}
                                </label>)
                            }
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-none">Login</button>
                            </div>
                        </form>
                        <p className=" text-center font-semibold"> Already have an Account?<Link to="/auth/login">Login</Link></p>
                    </div>
                </div>
        </div>
    );
};

export default Register;