import React from 'react'
import { Link } from 'react-router-dom'

const BaseSignUpSignInPage = () => {
  return (
    <section
      className='baseSignUpSignInPage'
      style={{
        background: 'white url("images/bs.svg") no-repeat  center',
        backgroundSize: '',
      }}
    >
      <div style={{ marginTop: '12vh' }} className='container'>
        <div className='row'>
          <div className='col-4'>
            <div
              className='card'
              style={{
                width: '18rem',
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'rgba(31, 36, 32, 0.5)',
              }}
            >
              {/* <img className='card-img-top' src='...' alt='Card image cap' /> */}
              <div className='card-body'>
                <h2 className='card-title'>SignUp/SignIn</h2>
                <h3 style={{ marginTop: '5rem' }} className='card-text'>
                  Buyer
                </h3>
                {/* <button
                  style={{ marginTop: '5rem' }}
                  href='#'
                  className='btn btn-primary'
                > */}
                <Link
                  style={{ marginTop: '5rem' }}
                  href='#'
                  className='btn btn-primary'
                  to='registerBuyer'
                >
                  SignUp/SignIn
                </Link>
                {/* </button> */}
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div
              className='card'
              style={{
                width: '18rem',
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'rgba(31, 36, 32, 0.5)',
              }}
            >
              {/* <img className='card-img-top' src='...' alt='Card image cap' /> */}
              <div className='card-body'>
                <h2 className='card-title'>SignUp/SignIn</h2>
                <h3 style={{ marginTop: '5rem' }} className='card-text'>
                  Seller
                </h3>
                {/* <button
                  style={{ marginTop: '5rem' }}
                  href='#'
                  className='btn btn-primary'
                > */}
                <Link
                  style={{ marginTop: '5rem' }}
                  href='#'
                  className='btn btn-primary'
                  to='registerSeller'
                >
                  SignUp/SignIn
                </Link>
                {/* </button> */}
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div
              className='card'
              style={{
                width: '18rem',
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'rgba(31, 36, 32, 0.5)',
              }}
            >
              {/* <img className='card-img-top' src='...' alt='Card image cap' /> */}
              <div className='card-body'>
                <h2 className='card-title'>SignUp/SignIn</h2>
                <h3 style={{ marginTop: '5rem' }} className='card-text'>
                  Educator
                </h3>
                {/* <button
                  style={{ marginTop: '5rem' }}
                  href='#'
                  className='btn btn-primary'
                > */}
                  <Link
                    style={{ marginTop: '5rem' }}
                    href='#'
                    className='btn btn-primary'
                    to='registerEducator'
                  >
                    SignUp/SignIn
                  </Link>
                {/* </button> */}
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </section>
  )
}

export default BaseSignUpSignInPage
