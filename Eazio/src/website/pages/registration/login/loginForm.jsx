import React, { useEffect, useState } from 'react'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import appleIcon from '../../../../assets/images/icons/apple.png'
import googleIcon from '../../../../assets/images/icons/google.png'
import facebookIcon from '../../../../assets/images/icons/Facebook.png'
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import { emailRegex, passwordRegex } from '../../../../utils/regex'

import { Link } from 'react-router-dom'

const LoginForm = () => {
    const formHook = useForm({ mode: 'onSubmit' });
    const { register, control, reset, handleSubmit, trigger, formState } = formHook
    const { errors, isValid, isDirty, isSubmitSuccessful } = formState;
    const [isPass, setIsPass] = useState(false)

    const onFormSubmit = (loginData) => {
        console.log(loginData, 'dataa');
        toast.success("Successfully Sign up");
    };


    return (
        <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
            <div className="form-group formGroupMb">
                <input type="email" placeholder="" id='email'
                    {...register('email', {
                        required: { value: true, message: 'Email is Required', },
                        pattern: { value: emailRegex, message: 'Invalid Email' },
                    })} />
                <label htmlFor="email">Enter email or user name</label>
                {
                    (errors.email) &&
                    <p className='invalidInput formFieldAbsolute'>{errors?.email?.message}</p>
                }
            </div>
            <div className="form-group">
                <input
                    type={isPass ? 'text' : 'password'}
                    placeholder=""
                    id='password'
                    {...register('password', {
                        required: { value: true, message: 'Password is Required' },
                        // pattern: { value: passwordRegex, message: 'Uppercase, minimum 8 characters, a number and a special character' }
                    })}
                />
                <label htmlFor="password">Password</label>
                {
                    (errors.password) &&
                    <p className='invalidInput formFieldAbsolute'>{errors?.password?.message}</p>
                }
                {
                    isPass ?
                        <IoMdEye className='passEyeIcon' onClick={() => setIsPass(!isPass)} />
                        :
                        <IoMdEyeOff className='passEyeIcon' onClick={() => setIsPass(!isPass)} />
                }
            </div>
            <div className='themeLink'>
                <Link>Forget Password?</Link>
            </div>
            <div className='formButton'>
                <button className='mainButton2'>Login</button>
            </div>
            <div className='continueWith'>or continue with</div>
            <div className="socialButtons">
                <button><img src={facebookIcon} alt="appleIcon" /></button>
                <button><img src={googleIcon} alt="googleIcon" /></button>
                <button><img src={appleIcon} alt="appleIcon" /></button>
            </div>

        </form>
    )
}

export default LoginForm