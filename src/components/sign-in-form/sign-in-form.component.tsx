import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils';

import './sign-in-form.styles.scss';
import { loginUser } from '../../state/slice/userSlice';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // const signInWithGoogle = async () => {
  //   await signInWithGooglePopup();
  // };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      dispatch(loginUser());
      window.location.href = '/'; // Redirect to home page
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleLogin}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button>Sign In</Button>
          {/* <Button buttonType='google' onClick={signInWithGoogle}>
            Sign In With Google
          </Button> */}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;