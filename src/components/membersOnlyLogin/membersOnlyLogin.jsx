import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { auth } from "../../firebase/firebase.utils";

import "./membersOnlyLogin.scss";
const eye = <FontAwesomeIcon icon={faEye} />;


class MembersOnlyLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      fffpassword: "",
      fffpasswordShown: false,
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, fffpassword } = this.state;

    

    
    try {
      await auth.signInWithEmailAndPassword(email, fffpassword);
      this.setState({ email: "", password: "" });
      if (fffpassword === 'Fire12Family') {
        window.location = 'Fire2012Family' /* 'MembersOnly' */
      } else if (fffpassword === 'Fire11Family') {
        window.location = 'Fire2011Family' /* 'MembersOnly' */
      } else if (fffpassword === 'Fire10Family') {
        window.location = 'Fire2010Family' /* 'MembersOnly' */
      } else if (fffpassword === 'Fire09Family') {
        window.location = 'Fire2009Family' /* 'MembersOnly' */
      } else if (fffpassword === 'Fire08Family') {
        window.location = 'Fire2008Family' /* 'MembersOnly' */
      } else if (fffpassword === 'Fire07Family') {
        window.location = 'Fire2007Family' /* 'MembersOnly' */
      } else if (fffpassword === 'Fire16UFamily') {
        window.location = 'Fire16UFamily' /* 'MembersOnly' */
      } else if (fffpassword === 'Fire18UFamily') {
        window.location = 'Fire18UFamily' /* 'MembersOnly' */
      }
    } catch (error) {
      alert('The password you entered does not match our records, please try again.');
    }
    
  };

  handleChange = event => {
    const { value, name } = event.target;
    const { fffpassword } = this.state;

    this.setState({ [name]: value });
    this.setState({ email: 'a@a.com'})

    if (fffpassword === 'Fire12Famil') {
    this.setState({ email: '12@fire.com' })
    } else if (fffpassword === 'Fire11Famil') {
      this.setState({ email: '11@fire.com' })
    } else if (fffpassword === 'Fire10Famil') {
      this.setState({ email: '10@fire.com' })
    } else if (fffpassword === 'Fire09Famil') {
      this.setState({ email: '09@fire.com' })
    } else if (fffpassword === 'Fire08Famil') {
      this.setState({ email: '08@fire.com' })
    } else if (fffpassword === 'Fire07Famil') {
      this.setState({ email: '07@fire.com' })
    } else if (fffpassword === 'Fire16UFamil') {
      this.setState({ email: '16u@fire.com' })
    } else if (fffpassword === 'Fire18UFamil') {
      this.setState({ email: '18u@fire.com' })
    }

  };

  togglefffpasswordShown = () => {
    const { fffpasswordShown } = this.state;
    this.setState({ fffpasswordShown: !fffpasswordShown });
  }


  render() {
    const { handleChange, handleSubmit, togglefffpasswordShown } = this;
    const { /*email,*/ fffpassword, fffpasswordShown } = this.state;

    return (
      <div className="login">
        <h1 className="members-only">Fire Fastpitch Family Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="password-wrapper">
            <FormInput
              name="fffpassword"
              type={fffpasswordShown ? "text" : "password"}
              autoComplete="fffpassword"
              value={fffpassword}
              handleChange={handleChange}
              label="password"
              required
            />
            <i onClick={togglefffpasswordShown}>{eye}</i>
          </div>
          <CustomButton type="submit"> Log In </CustomButton>
        </form>
      </div>
    );
  }
}

export default MembersOnlyLogin;
