import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.scss";
const eye = <FontAwesomeIcon icon={faEye} />;

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordShown: false,
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      alert('The email / password combination you entered does not match our records, please try again.');
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  togglePasswordShown = () => {
    const { passwordShown } = this.state;
    this.setState({ passwordShown: !passwordShown } );
  }

  render() {
    const { handleChange, handleSubmit, togglePasswordShown } = this;
    const { email, password, passwordShown } = this.state;

    return (
      <div className="sign-in">
        <h1 className="admin-title">Administrative Sign In</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
            label="email"
            required
          />
          <div className="password-wrapper">
            <FormInput
              name="password"
              type={passwordShown ? "text" : "password"}
              value={password}
              handleChange={handleChange}
              label="password"
              required
            />
            <i onClick={togglePasswordShown}>{eye}</i>
          </div>
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
