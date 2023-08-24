import React from "react";
import { Switch, Route, Redirect, BrowserRouter as Router, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { updateTeams } from "./redux/team/team.actions";
import { updatePreregistration } from "./redux/registration/registration.actions";
import { updateRegistered } from "./redux/registration/registration.actions";
import WithSpinner from "./components/with-spinner/with-spinner";

import "./App.scss";

import HomePage from "./pages/homepage/homepage";
import TeamPage from "./pages/teamPage/teamPage";
import SignInPage from "./pages/sign-inpage/sign-inpage";
import AdminPage from "./pages/adminpage/adminpage";
import Header from "./components/header/header";


import Footer from "./components/footer/footer";
import TryoutsPage from "./pages/tryoutspage/tryout";
// import TryoutsPageStillNeed from "./pages/tryoutspageStillNeed/tryoutStillNeed";
// import TryoutsOver from "./pages/tryoutsOverPage/tryoutsOverPage";

import TrainingPage from "./pages/trainingpage/training";
import TournamentPage from "./pages/TournamentPage/TournamentPage";
import PreregistrationPage from "./pages/preregistrationpage/preregistrationpage.jsx";
import RegisteredPage from "./pages/registeredpage/registeredpage.jsx";
import PreregisteredPage from "./pages/PreregisteredPage/Preregisteredpage.jsx";
import TeamRosterPage from "./pages/TeamRosterPage/TeamRosterPage.jsx";
import MembersOnlyPage from "./pages/membersOnlyPage/membersOnlyPage.jsx";
import TrainerBioPage from "./pages/trainerBioPage/TrainerBioPage.jsx"




import { Team1URLS} from "../src/pages/teamPage/events";
import {
  auth,
  createUserProfileDocument,
  firestore,
  convertCollectionsSnapshotToMap,
  convertCollectionsSnapshotToMap4,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const TeamPageWithSpinner = WithSpinner(TeamPage);
const TournamentPageWithSpinner = WithSpinner(TournamentPage);
const PreregistrationPageWithSpinner = WithSpinner(PreregistrationPage);
const RegisteredPageWithSpinner = WithSpinner(RegisteredPage);
const PreregisteredPageWithSpinner = WithSpinner(PreregisteredPage);
const TeamRosterPageWithSpinner = WithSpinner(TeamRosterPage);
const MembersOnlyPageWithSpinner = WithSpinner(MembersOnlyPage);
const TrainerBioPageWithSpinner = WithSpinner(TrainerBioPage);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
    const { updateTeams } = this.props;
    const collectionRef1 = firestore.collection("teams");
    
    this.unsubscribeFromSnapshot = collectionRef1.onSnapshot(
      async (snapshot) => {
        const teamsMap = convertCollectionsSnapshotToMap(snapshot);
        updateTeams(teamsMap);
        this.setState({ loading: false });
      }
    );

    const { updateRegistered } = this.props;
    const collectionRef4 = firestore.collection("registered");


    this.unsubscribeFromSnapshot = collectionRef4.onSnapshot(
      async (snapshot) => {
        const registeredMap = convertCollectionsSnapshotToMap4(snapshot);
        updateRegistered(registeredMap)
        this.setState({ loading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { loading } = this.state;
    return (
      <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/Team1"
            component={withRouter(() => 
              (
              <TeamPageWithSpinner
                isLoading={loading}
                teamName="Team 1"
                title="8U"
                eventurls={Team1URLS} />
              
            ))}
            />
            <Route
              path="/Team2"
              component={withRouter(() =>
                (
                  <TeamPageWithSpinner
                    isLoading={loading}
                    teamName="Team 2"
                    title="10U"
                    eventurls={Team1URLS} />
                ))}
            />
            <Route
              path="/Team3"
              component={withRouter(() =>
              (
                <TeamPageWithSpinner
                  isLoading={loading}
                  teamName="Team 3"
                  title="12U"
                  eventurls={Team1URLS} />
              ))}
            />
            <Route
              path="/Team4"
              component={withRouter(() =>
              (
                <TeamPageWithSpinner
                  isLoading={loading}
                  teamName="Team 4"
                  title="14U"
                  eventurls={Team1URLS} />
              ))}
            />
            <Route path="/Tryouts" component={TryoutsPage} />
            {/* <Route path="/Tryouts" component={TryoutsOver} /> */}
            <Route path="/Training" component={TrainingPage} />
            <Route
              path="/Team1Family"
              component={withRouter(() =>
                (
                  <MembersOnlyPageWithSpinner
                    isLoading={loading}
                    teamname="Team 1"
                    title="Team1"
                    index={3}/>
                ))}
            />
            <Route
              path="/Team2Family"
              component={withRouter(() =>
                (
                  <MembersOnlyPageWithSpinner
                    isLoading={loading}
                    teamname="Team 2"
                    title="Team2"
                    index={0}/>
                ))}
            />
            <Route
              path="/Team3Family"
              component={withRouter(() =>
                (
                  <MembersOnlyPageWithSpinner
                    isLoading={loading}
                    teamname="Team 3"
                    title="Team3"
                    index={1}/>
                ))}
            />
            <Route
              path="/Team4Family"
              component={withRouter(() =>
                (
                  <MembersOnlyPageWithSpinner
                    isLoading={loading}
                    teamname="Team 4"
                    title="Team4"
                    index={2}/>
                ))}
            />
          <Route path="/Preregistration" render={() => <PreregistrationPageWithSpinner isLoading={loading} />}
          />
          <Route
            path="/Tournaments"
            render={() => <TournamentPageWithSpinner isLoading={loading} />}
          />
          <Route
            path="/DOC"
              render={() => <TrainerBioPageWithSpinner isLoading={loading} />}
          />
          <Route path="/Adminpage"
            component={withRouter(() =>
              (
                <AdminPage />
              ))} 
          />
          <Route
            exact
            path="/AdminSignIn"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/Adminpage" />
              ) : (
                <SignInPage />
              )
            }
          />
          <Route
            path="/Preregistered"
            component={withRouter(() =>
              (
                <PreregisteredPageWithSpinner
                  isLoading={loading}
                />
              ))}
          />
          <Route
            path="/Registered"
            component={withRouter(() =>
              (
                <RegisteredPageWithSpinner
                  isLoading={loading}
                />
              ))}
          />
          <Route
            path="/Team1Roster"
            component={withRouter(() =>
              (
                <TeamRosterPageWithSpinner
                  isLoading={loading}
                  teamname="Team 1"
                  title="8U"
                  index={3} />
              ))}
          />
          <Route
            path="/Team2Roster"
            component={withRouter(() =>
              (
                <TeamRosterPageWithSpinner
                  isLoading={loading}
                  teamname="Team 2"
                  title="10U"
                  index={0} />

              ))}
          />
          <Route
            path="/Team3Roster"
            component={withRouter(() =>
              (
                <TeamRosterPageWithSpinner
                  isLoading={loading}
                  teamname="Team 3"
                  title="12U"
                  index={1} />

              ))}
          />
          <Route
            path="/Team4Roster"
            component={withRouter(() =>
            (
              <TeamRosterPageWithSpinner
                isLoading={loading}
                teamname="Team 4"
                title="14U8"
                index={2} />

            ))}
          />
        </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  updateTeams: (teamsMap) => dispatch(updateTeams(teamsMap)),
  updateRegistered: (registeredMap) => dispatch(updateRegistered(registeredMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
