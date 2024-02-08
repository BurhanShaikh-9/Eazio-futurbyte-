import React, { useState } from 'react'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import appleIcon from '../../../../assets/images/icons/apple.png'
import googleIcon from '../../../../assets/images/icons/google.png'
import facebookIcon from '../../../../assets/images/icons/Facebook.png'
import { toast } from "react-toastify";
import { Link } from 'react-router-dom'
import { contactNumberRegex, emailRegex, passwordRegex, usernameRegex } from '../../../../utils/regex';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
    const formHook = useForm({ mode: 'onSubmit' });
    const { register, control, reset, handleSubmit, trigger, formState, watch } = formHook
    const { errors, isValid, isDirty, isSubmitSuccessful } = formState;
    const [isPass, setIsPass] = useState(false)
    const [isPass1, setIsPass1] = useState(false)
    const watchPassword = watch('password', '');

    const onFormSubmit = (loginData) => {
        console.log(loginData, 'dataa');
        toast.success("Successfully Sign up");
    };


    return (
        <React.Fragment>

            <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
                <div className="form-group">
                    <input type="email" placeholder="" id='email'
                        {...register('email', {
                            required: { value: true, message: 'Email is Required', },
                            pattern: { value: emailRegex, message: 'Invalid Email' },
                        })} />
                    <label htmlFor="email">Enter Email</label>
                    {
                        (errors.email) &&
                        <p className='invalidInput formFieldAbsolute'>{errors?.email?.message}</p>
                    }
                </div>
                <div className="form-group">
                    <input type="text" placeholder="" id='username'
                        {...register('username', {
                            required: { value: true, message: 'Username is Required', },
                            pattern: { value: usernameRegex, message: 'Characters limit is 15 max' },
                        })} />
                    <label htmlFor="username">Create User name</label>
                    {
                        (errors.username) &&
                        <p className='invalidInput formFieldAbsolute'>{errors?.username?.message}</p>
                    }
                </div>
                <div className="form-group">
                    <input type="text" placeholder="" id='number'
                        {...register('number', {
                            required: { value: true, message: 'Number is Required', },
                            pattern: { value: contactNumberRegex, message: 'Invalid Number' },
                        })}
                    />
                    <label htmlFor="number">Contact number</label>
                    {
                        (errors.number) &&
                        <p className='invalidInput formFieldAbsolute'>{errors?.number?.message}</p>
                    }
                </div>
                <div className="form-group">
                    <input type={isPass ? 'text' : 'password'} placeholder="" id='password'
                        {...register('password', {
                            required: { value: true, message: 'Password is Required' },
                            pattern: { value: passwordRegex, message: 'Uppercase, minimum 8 characters and a number' }
                        })} />
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
                <div className="form-group">
                    <input type={isPass1 ? 'text' : 'password'} placeholder="" id='confirmPassword'
                        {...register('confirmPassword', {
                            required: { value: true, message: 'Confirm Password is Required' },
                            validate: (value) => value === watchPassword || 'Passwords do not match',
                        })}
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    {
                        (errors.confirmPassword) &&
                        <p className='invalidInput formFieldAbsolute'>{errors?.confirmPassword?.message}</p>
                    }
                    {
                        isPass1 ?
                            <IoMdEye className='passEyeIcon' onClick={() => setIsPass1(!isPass1)} />
                            :
                            <IoMdEyeOff className='passEyeIcon' onClick={() => setIsPass1(!isPass1)} />
                    }
                </div>
                <div className='formButton'>
                    <button className='mainButton2'>Register</button>
                </div>
                <div className='continueWith'>or continue with</div>
                <div className="socialButtons">
                    <button><img src={facebookIcon} alt="appleIcon" /></button>
                    <button><img src={googleIcon} alt="googleIcon" /></button>
                    <button><img src={appleIcon} alt="appleIcon" /></button>
                </div>

            </form>
        </React.Fragment>

    )
}

export default SignupForm