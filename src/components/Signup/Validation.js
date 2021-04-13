export default function Validation(values) {
  let errors = {}
  let nameregex = /^[a-zA-Z ]*$/
  let mailregex = /^([_\-.0-9a-zA-Z]+)@([_\-.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
  let pswdregex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{5,20}$/

  if (values.fullname.replace(/\s/g, '').length <= 0) {
    errors.fullname = '*No whitespaces allowed !'
  } else if (values.fullname.length <= 5) {
    errors.fullname = '*Name is too short !'
  } else if (values.fullname.length > 25) {
    errors.fullname = '*Name should be less than 25 characters !'
  } else if (!values.fullname.match(nameregex)) {
    errors.fullname = '*Name can contain only alphabets !'
  }

  if (values.email.replace(/\s/g, '').length <= 0) {
    errors.email = '*No whitespaces allowed !'
  } else if (values.email.length > 40) {
    errors.email = '*Email should be less than 40 characters !'
  } else if (!values.email.match(mailregex)) {
    errors.email = '*Please enter valid Email !'
  }

  if (!values.password) {
    errors.password = '*Password is required'
  } else if (values.password.length < 5) {
    errors.password = '*Password needs to be more than 8 characters'
  } else if (values.password.length > 20) {
    errors.password = '*Password needs to be less than 20 characters'
  }

  if (values.password !== values.confirmPassword) {
    errors.password = '*password did not match'
  }
  return errors
}
