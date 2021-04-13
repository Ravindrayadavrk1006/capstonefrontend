import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  if (props.location.data) {
    console.log(props.location.data.route)
  }

  function validateForm() {
    return email.length > 0 && password.length > 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    // console.log(email, password)
      var values = { email: email, password: password }
      console.log('printing the values', values)
      fetch('/user/buyer/signIn', {
        method: 'POST',
        body: JSON.stringify(values), // The data
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          console.log('response returned from the server')
          console.log(response.json())
        })
        .catch((err) => {
          console.log(err)
        })
  }

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      className='Login'
    >
      <Form
        style={{ marginLeft: '30vw', maxWidth: '320px' }}
        onSubmit={handleSubmit}
      >
        <div style={{ height: '50px', background: 'rgb(113, 130, 117)' }}>
          <h1 style={{ textAlign: 'center' }}>SignIn Buyer</h1>
        </div>

        <Form.Group size='lg' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size='lg' type='submit' disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </section>
  )
}
