import React from 'react'
import { Link } from 'react-router-dom'
import useForm from './useForm'
import validate from './Validation'
import FormSuccess from './FormSuccess'

export default function RegisterEducator() {
  const { handleInput, handleSubmit, values, errors, isSubmitting } = useForm(
    validate
  )

  return (
    <section>
      {Object.keys(errors).length === 0 && isSubmitting ? (
        <FormSuccess name={values.fullname} />
      ) : (
        <div className='form-container'>
          <h1
            style={{ textAlign: 'center', fontSize: '100px', color: 'green' }}
          >
            Educator
          </h1>
          <h2>Login/Register</h2>
          <form
            onSubmit={handleSubmit('/user/educator/signUp')}
            autoComplete='off'
            noValidate
          >
            <div className='form-input'>
              <label>FullName</label>
              <input
                style={{ width: '25vw' }}
                name='fullname'
                type='text'
                onChange={handleInput}
                value={values.fullname}
              />
            </div>
            <div className='form-input'>
              <label>Phone</label>
              <input
                style={{ width: '25vw' }}
                name='phone'
                type='tel'
                onChange={handleInput}
                value={values.phone}
              />
              {errors.email && (
                <small className='form-error'>{errors.email}</small>
              )}
            </div>

            <div className='form-input'>
              <label>Email</label>
              <input
                style={{ width: '25vw' }}
                name='email'
                type='text'
                onChange={handleInput}
                value={values.email}
              />
              {errors.email && (
                <small className='form-error'>{errors.email}</small>
              )}
            </div>

            <div className='form-input'>
              <label>
                Password{' '}
                <span className='tooltip'>
                  {' '}
                  &#9432;
                  <span className='tooltip-text'>
                    Password must have atleast: <br />
                    <br />
                    &#8226; 1 digit (0-9)
                    <br />
                    &#8226; 1 uppercase &amp; 1 lowercase alphabet
                    <br />
                    &#8226; 1 special character (!#$@^%&amp;?)
                    <br />
                    &#8226; 8 characters &amp; less than 20 characters
                  </span>
                </span>
              </label>
              <input
                style={{ width: '25vw' }}
                name='password'
                type='password'
                onChange={handleInput}
                value={values.password}
              />
              {errors.password && (
                <small className='form-error'>{errors.password}</small>
              )}
            </div>
            <div className='form-input'>
              <label>
                Confirm password{' '}
                <span className='tooltip'>
                  {' '}
                  &#9432;
                  <span className='tooltip-text'>
                    Password must have atleast: <br />
                    <br />
                    &#8226; 1 digit (0-9)
                    <br />
                    &#8226; 1 uppercase &amp; 1 lowercase alphabet
                    <br />
                    &#8226; 1 special character (!#$@^%&amp;?)
                    <br />
                    &#8226; 8 characters &amp; less than 20 characters
                  </span>
                </span>
              </label>
              <input
                name='confirmPassword'
                type='password'
                onChange={handleInput}
                style={{ width: '25vw' }}
                value={values.confirmPassword}
              />
            </div>
            <div
              style={{ position: 'relative', left: '-8vw' }}
              className='buttonSection '
            >
              <button type='submit' className='form-btn'>
                Submit
              </button>
              <br />
              <small>
                Already have an account? Login{' '}
                <Link to='/signInEducator'>
                  <h5 style={{ color: 'greeen' }}>here</h5>
                </Link>
              </small>
            </div>
          </form>
        </div>
      )}
    </section>
  )
}
