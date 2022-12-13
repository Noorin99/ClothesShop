import { useState, useContext } from "react";
import {
  createAuthWithEmailPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import { UserContext } from "../../contexts/user";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import "./Sign-up.scss";


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) return;
      const { user } = await createAuthWithEmailPassword(email, password);
      setCurrentUser(user);
      user.displayName = displayName;
      await createUserDocumentFromAuth(user);
      resetFormFields();
    } catch (err) {
      console.log("there is error", err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Full name"
          type="text"
          required
          onChange={handleChanges}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChanges}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChanges}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChanges}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
