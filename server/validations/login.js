import validator from 'validator';
import isEmpty from '../middlewares/isEmpty';

const validLogin = (data) => {
  const errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Email validations
  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }


  // Password validations
  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validLogin;
