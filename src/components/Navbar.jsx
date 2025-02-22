import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user,logout } = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className='text-black'>{user && user.email}</div>
            <div className='nav space-x-5'>
                <Link to="/">Home</Link>
                <Link to="career">Career</Link>
                <Link to="about">About</Link>
                </div> 
                <div className='login'>
                    <div className='flex gap-2'> 
                        {
                            user && user?.email ? (<div><img className='w-10 rounded-sm' src={user?.photoURL} 
                            alt="" />
                            <p>{user.displayName} </p></div>) :
                             (<img src={userIcon} alt="" />)
                        };
                        
                    {
                        user && user?.email ? (<button onClick={logout} className='btn btn-neutral'>Log-out</button>):(<Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>)
                    }
                    
                    
                    </div>
                   
                    </div>           
        </div>
    );
};

export default Navbar;