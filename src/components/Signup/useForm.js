import { useState } from 'react'

const useForm = (validate) => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    password: '',
    phone: 0,
    confirmPassword: '',
  })
  // const [url,setUrl]=useState('');
  // setUrl(sentUrl)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [signUpSuccessfull, setSignUpSuccessful] = useState('false')
  const handleInput = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  // const handleSubmit = (event,url) => {
  //   event.preventDefault()
  //   setErrors(validate(values))
  //   setIsSubmitting(true)
  //   console.log(values)
  //   console.log("sent url",url);

  // }
  const handleSubmit = (url) => (event) => {
    event.preventDefault()
    setErrors(validate(values))
    // setIsSubmitting(true)
    console.log(values)
    console.log('sent url', url)
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(values), // The data
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        console.log(response.json())
        setSignUpSuccessful(true)
        console.log('value of signUp succesfull', signUpSuccessfull)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return {
    handleInput,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    signUpSuccessfull,
  }
}

export default useForm
