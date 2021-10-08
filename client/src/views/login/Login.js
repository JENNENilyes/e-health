/* eslint-disable no-unused-vars */
import './Login.css' ;
import useLogin from './useLogin.js';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { UidContext } from '../../AppContext';
const Login = ({submitLogin}) => {
    
    const uid = useContext(UidContext);

    const {handleChange, values, handleSubmit, errors}= useLogin(submitLogin);


    if (uid){
        window.location="/admin/icons";
    }
    else{
        return (
            <div>
                
                <form className="form" onSubmit={ handleSubmit}>
                    <div className="form-inputs">
                        <label htmlFor='email' className='form-label'>Email </label>
                        <input
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email address'
                        onChange={handleChange}
                        value={values.email}
                        />
                    </div>
    
                    <div className="form-inputs">
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input
                        id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your password'
                    //
                        value={values.password}
                         onChange={handleChange}
                        />
                    </div>
                    <button className="form-input-btn" type="submit" > login </button> 
                    <span className="form-input-login">
                        You still don't have an account? Create it <Link to='/signup'>here</Link>
                    </span>
                </form>
                
            </div>
    
    
        )

    }
    
}
export default Login;