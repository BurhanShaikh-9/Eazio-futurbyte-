import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './loginForm'
import { ROUTES } from '../../../../utils/routes'

const Login = () => {
  return (
    <React.Fragment>
      <div className="bodyContainer">
        <section className='loginMain'>
          <div className='leftLoginMenu'>
            <h1 className='fs3'>Sign in to</h1>
            <h2 className='fs2'>Lorem Ipsum is simply </h2>
            <p>If you don’t have an account register</p>
            <p className='paraLink'>You can <Link to={ROUTES.SIGNUP}>Register here !</Link></p>
          </div>
          <div className='rightLoginMenu'>
            <div className="formOuter">
              <h2 className='fs2'>Sign In</h2>
              <LoginForm />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Login