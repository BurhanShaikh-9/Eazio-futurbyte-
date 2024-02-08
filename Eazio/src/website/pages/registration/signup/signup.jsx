import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../utils/routes'
import SignupForm from './signupForm'

const Signup = () => {
  return (
    <React.Fragment>
      <div className="bodyContainer">
        <section className='loginMain'>
          <div className='leftLoginMenu'>
            <h1 className='fs3'>Sign Up to</h1>
            <h2 className='fs2'>Lorem Ipsum is simply </h2>
            <p>If you don’t have an account register</p>
            <p className='paraLink'>You can <Link to={ROUTES.SIGNUP}>Register here !</Link></p>
          </div>
          <div className='rightLoginMenu'>
            <div className="formOuter">
              <h2 className='fs2'>Sign Up</h2>
              <SignupForm />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Signup