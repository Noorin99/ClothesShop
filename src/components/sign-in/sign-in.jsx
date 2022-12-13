import { signInEmailPassword,signInWithGooglePopup} from "../../utils/firebase/firebase";
import { useState, useContext } from "react";

import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { UserContext } from "../../contexts/user";

import './sign-in.scss'


const interedFields = {
  email: " ",
  password: " ",
};

const SignInComponent = () => {
  const [fields, setFields] = useState(interedFields);
  const { email, password } = fields;
  
  const resetFormFields = () => {
    setFields(interedFields)
  } 

  const {setCurrentUser} = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {user} = await signInEmailPassword(email, password);
      setCurrentUser(user);
      resetFormFields();
    } catch (err) {
      switch(err.code){
        case 'auth/wrong-password':
          alert("incorrect password for email")
          break
        case 'auth/user-not-found':
          alert("no user associated with this email")
          break
        default:
          console.log(err)
      }
    }
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
}

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="button-containers">
          <Button type="submit">Sign in</Button>
          <button type='button' onClick={logGoogleUser} className='google-sign-in' >Google Sign In</button> 
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;
