import React, { useState } from 'react'

const UpdateProfile = () => {
  const [values, setValues] = useState({
    pinCode: '',
    address: '',
    profilePicUrl: '',
  })
  const handleInput = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  return (
    <section>
      <div>
        <form
          //  onSubmit={handleSubmit}
          classNameName='addProductForm'
          action='/addProduct'
          method='post'
        >
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Pin Code</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter pincode'
              value={values.pinCode}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Address</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='address'
              value={values.address}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Profile Pic Url</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='profilepicUrl'
              value={values.profilePicUrl}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default UpdateProfile
