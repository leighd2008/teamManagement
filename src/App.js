import React from "react";
import { Switch, Route, Redirect, BrowserRouter as Router, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { updateTeams } from "./redux/team/team.actions";
import { updateFields } from "./redux/field/field.actions";
import { updatePreregistration } from "./redux/registration/registration.actions";
import { updateRegistered } from "./redux/registration/registration.actions";
import WithSpinner from "./components/with-spinner/with-spinner";

import "./App.scss";

import HomePage from "./pages/homepage/homepage";
import TeamPage from "./pages/teamPage/teamPage";
import SignInPage from "./pages/sign-inpage/sign-inpage";
import AdminPage from "./pages/adminpage/adminpage";
import Header from "./components/header/header";
// import Header from "./components/header_debugging/header";


import Footer from "./components/footer/footer";
// import TryoutsPage from "./pages/tryoutspage/tryout";
// import TryoutsPageStillNeed from "./pages/tryoutspageStillNeed/tryoutStillNeed";
import TryoutsOver from "./pages/tryoutsOverPage/tryoutsOverPage";

import TrainingPage from "./pages/trainingpage/training";
import TournamentPage from "./pages/TournamentPage/TournamentPage";
import FieldSchedulerPage from "./pages/fieldSchedulerPage/fieldSchedulerPage"
import PreregistrationPage from "./pages/preregistrationpage/preregistrationpage.jsx";
import RegisteredPage from "./pages/registeredpage/registeredpage.jsx";
import PreregisteredPage from "./pages/PreregisteredPage/Preregisteredpage.jsx";
import TeamRosterPage from "./pages/TeamRosterPage/TeamRosterPage.jsx";
import MembersOnlyPage from "./pages/membersOnlyPage/membersOnlyPage.jsx";
import DemetraBiopage from "./pages/demetraBiopage/DemetraBiopage.jsx"




import { Fire12URLS, Fire11URLS, Fire10URLS, Fire09URLS, Fire08URLS, Fire07URLS, Fire16UURLS, Fire18UURLS} from "../src/pages/teamPage/events";
import {
  auth,
  createUserProfileDocument,
  firestore,
  convertCollectionsSnapshotToMap,
  convertCollectionsSnapshotToMap2,
  convertCollectionsSnapshotToMap3,
  convertCollectionsSnapshotToMap4,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const TeamPageWithSpinner = WithSpinner(TeamPage);
const TournamentPageWithSpinner = WithSpinner(TournamentPage);
const FieldSchedulerPageWithSpinner = WithSpinner(FieldSchedulerPage);
const PreregistrationPageWithSpinner = WithSpinner(PreregistrationPage);
const RegisteredPageWithSpinner = WithSpinner(RegisteredPage);
const PreregisteredPageWithSpinner = WithSpinner(PreregisteredPage);
const TeamRosterPageWithSpinner = WithSpinner(TeamRosterPage);
const MembersOnlyPageWithSpinner = WithSpinner(MembersOnlyPage);
const DemetraBiopageWithSpinner = WithSpinner(DemetraBiopage);





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

    const { updateFields } = this.props;
    const collectionRef2 = firestore.collection("fields");


    this.unsubscribeFromSnapshot = collectionRef2.onSnapshot(
      async (snapshot) => {
        const fieldsMap = convertCollectionsSnapshotToMap2(snapshot);
        updateFields(fieldsMap)
        this.setState({ loading: false });
      }
    );

    const { updatePreregistration } = this.props;
    const collectionRef3 = firestore.collection("preregistration2022");


    this.unsubscribeFromSnapshot = collectionRef3.onSnapshot(
      async (snapshot) => {
        const preregistrationMap = convertCollectionsSnapshotToMap3(snapshot);
        updatePreregistration(preregistrationMap)
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
            path="/Fire18U"
            component={withRouter(() => 
              (
              <TeamPageWithSpinner
                isLoading={loading}
                teamname="Fire 18U"
                title="Fire18U"
                eventurls={Fire18UURLS} />
              
            ))}
            />
            <Route
              path="/Fire16U"
              component={withRouter(() =>
                (
                  <TeamPageWithSpinner
                    isLoading={loading}
                    teamname="Fire 16U"
                    title="Fire16U"
                    eventurls={Fire16UURLS} />
                ))}
            />
            <Route
              path="/Fire2007"
              component={withRouter(() =>
              (
                <TeamPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2007"
                  title="Fire2007"
                  eventurls={Fire07URLS} />
              ))}
            />
            <Route
              path="/Fire2008"
              component={withRouter(() =>
              (
                <TeamPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2008"
                  title="Fire2008"
                  eventurls={Fire08URLS} />
              ))}
            />
          <Route
            path="/Fire2009"
            component={withRouter(() => 
              (
              <TeamPageWithSpinner
                isLoading={loading}
                teamname="Fire 2009"
                title="Fire2009"
                eventurls={Fire09URLS} />
            ))}
            />
            <Route
              path="/Fire2010"
              component={withRouter(() =>
              (
                <TeamPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2010"
                  title="Fire2010"
                  eventurls={Fire10URLS} />
              ))}
            />
            <Route
              path="/Fire2011"
              component={withRouter(() =>
              (
                <TeamPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2011"
                  title="Fire2011"
                  eventurls={Fire11URLS} />
              ))}
            />
            <Route
              path="/Fire2012"
              component={withRouter(() =>
              (
                <TeamPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2012"
                  title="Fire2012"
                  eventurls={Fire12URLS} />
              ))}
            />
          {/* <Route path="/Tryouts" component={TryoutsPage} /> */}
            <Route path="/Tryouts" component={TryoutsOver} />
            <Route path="/Training" component={TrainingPage} />
            <Route
              path="/Fire18UFamily"
              component={withRouter(() =>
                (
                  <MembersOnlyPageWithSpinner
                    isLoading={loading}
                    teamname="Fire 18U"
                    title="Fire18U"
                    index={1}/>
                ))}
            />
            <Route
              path="/Fire16UFamily"
              component={withRouter(() =>
                (
                  <MembersOnlyPageWithSpinner
                    isLoading={loading}
                    teamname="Fire 16U"
                    title="Fire16U"
                    index={0}/>
                ))}
            />
            <Route
              path="/Fire2007Family"
              component={withRouter(() =>
                (
                  <MembersOnlyPageWithSpinner
                    isLoading={loading}
                    teamname="Fire 2007"
                    title="Fire2007"
                    index={7}/>

                ))}
            />
            <Route
              path="/Fire2008Family"
              component={withRouter(() =>
              (
                <MembersOnlyPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2008"
                  title="Fire2008"
                  index={2} />

              ))}
            />
            <Route
              path="/Fire2009Family"
              component={withRouter(() =>
              (
                <MembersOnlyPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2009"
                  title="Fire2009"
                  index={6} />

              ))}
            />
            <Route
              path="/Fire2010Family"
              component={withRouter(() =>
              (
                <MembersOnlyPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2010"
                  title="Fire2010"
                  index={4} />

              ))}
            />
            <Route
              path="/Fire2011Family"
              component={withRouter(() =>
              (
                <MembersOnlyPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2011"
                  title="Fire2011"
                  index={3} />

              ))}
            />
            <Route
              path="/Fire2012Family"
              component={withRouter(() =>
              (
                <MembersOnlyPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2012"
                  title="Fire2012"
                  index={5} />

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
              render={() => <DemetraBiopageWithSpinner isLoading={loading} />}
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
            path="/Field1"
            component={withRouter(() =>
                (
              <FieldSchedulerPageWithSpinner
                isLoading={loading}
                title="Field1"
                fieldname="Field 1"
              />
            ))}
          />
          <Route
            path="/Field2"
            component={withRouter(() =>
                (
              <FieldSchedulerPageWithSpinner
                isLoading={loading}
                title="Field2"
                fieldname="Field 2"
              />
            ))}
          />
          <Route
            path="/Field3"
            component={withRouter(() =>
                (
              <FieldSchedulerPageWithSpinner
                isLoading={loading}
                title="Field3"
                fieldname="Field 3"
              />
            ))}
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
            path="/18URoster"
            component={withRouter(() =>
              (
                <TeamRosterPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 18U"
                  title="Fire18U"
                  index={1} />
              ))}
            />
            <Route
              path="/16URoster"
              component={withRouter(() =>
                (
                  <TeamRosterPageWithSpinner
                    isLoading={loading}
                    teamname="Fire 16U"
                    title="Fire16U"
                    index={0} />

                ))}
            />
            <Route
              path="/2007Roster"
              component={withRouter(() =>
                (
                  <TeamRosterPageWithSpinner
                    isLoading={loading}
                    teamname="Fire 2007"
                    title="Fire2007"
                    index={7} />

                ))}
            />
            <Route
              path="/2008Roster"
              component={withRouter(() =>
              (
                <TeamRosterPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2008"
                  title="Fire2008"
                  index={2} />

              ))}
            />
            <Route
              path="/2010Roster"
              component={withRouter(() =>
              (
                <TeamRosterPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2010"
                  title="Fire2010"
                  index={4} />

              ))}
            />
            <Route
              path="/2009Roster"
              component={withRouter(() =>
              (
                <TeamRosterPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2009"
                  title="Fire2009"
                  index={6} />

              ))}
            />
            <Route
              path="/2011Roster"
              component={withRouter(() =>
              (
                <TeamRosterPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2011"
                  title="Fire2011"
                  index={3} />

              ))}
            />
            <Route
              path="/2012Roster"
              component={withRouter(() =>
              (
                <TeamRosterPageWithSpinner
                  isLoading={loading}
                  teamname="Fire 2012"
                  title="Fire2012"
                  index={5} />

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
  updateFields: (fieldsMap) => dispatch(updateFields(fieldsMap)),
  updatePreregistration: (preregistrationMap) => dispatch(updatePreregistration(preregistrationMap)),
  updateRegistered: (registeredMap) => dispatch(updateRegistered(registeredMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
