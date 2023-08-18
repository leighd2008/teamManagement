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
      familyPassword: "",
      familyPasswordShown: false,
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { email, familyPassword } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, familyPassword);
      this.setState({ email: "", password: "" });
      if (familyPassword === 'Team1Family') {
        window.location = 'Team1Family' /* 'MembersOnly' */
      } else if (familyPassword === 'Team2Family') {
        window.location = 'Team2Family' /* 'MembersOnly' */
      } else if (familyPassword === 'Team3Family') {
        window.location = 'Team3Family' /* 'MembersOnly' */
      } else if (familyPassword === 'Team4Family') {
        window.location = 'Team4Family' /* 'MembersOnly' */
      }
    } catch (error) {
      alert(`The password you entered does not match our records, please try again. ${familyPassword} ${this.state.email}`);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    const { familyPassword } = this.state;

    this.setState({ [name]: value });
    this.setState({ email: 'a@a.com'})
//  change email when password is one letter short, or email doesn't change
    if (familyPassword === 'Team1Famil') {
    this.setState({ email: 'team1@family.com' })
    } else if (familyPassword === 'Team2Famil') {
      this.setState({ email: 'team2@family.com' })
    } else if (familyPassword === 'Team3Famil') {
      this.setState({ email: 'Team3@family.com' })
    } else if (familyPassword === 'Team4Famil') {
      this.setState({ email: 'team4@family.com' })
    }
  };

  toggleFamilyPasswordShown = () => {
    const { familyPasswordShown } = this.state;
    this.setState({ familyPasswordShown: !familyPasswordShown });
  }


  render() {
    const { handleChange, handleSubmit, toggleFamilyPasswordShown } = this;
    const { /*email,*/ familyPassword, familyPasswordShown } = this.state;

    return (
      <div className="login">
        <h1 className="members-only">Family Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="password-wrapper">
            <FormInput
              name="familyPassword"
              type={familyPasswordShown ? "text" : "password"}
              autoComplete="familyPassword"
              value={familyPassword}
              handleChange={handleChange}
              label="password"
              required
            />
            <i onClick={toggleFamilyPasswordShown}>{eye}</i>
          </div>
          <CustomButton type="submit"> Log In </CustomButton>
        </form>
      </div>
    );
  }
}

export default MembersOnlyLogin;
