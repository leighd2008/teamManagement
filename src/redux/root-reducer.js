import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import teamMenuReducer from "./teamMenu/teamMenu.reducer";
import fangearMenuReducer from "./fangearMenu/fangearMenu.reducer";
import guidelinesMenuReducer from "./guidelinesMenu/guidelinesMenu.reducer";
import all_teamsReducer from "./all_teams/all_teams.reducer";
import teamReducer from "./team/team.reducer";
import trainingReducer from "./training/training.reducer";
import recruitingReducer from "./recruiting/recruiting.reducer";
import eventReducer from "./event/event.reducer";
import adminReducer from "./admin/admin.reducer";


import fieldReducer from "./field/field.reducer";
import registrationReducer from "./registration/registration.reducer";
// import registeredReducer from "./registered/registered.reducer";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  teamMenu: teamMenuReducer,
  fangearMenu: fangearMenuReducer,
  guidelinesMenu: guidelinesMenuReducer,
  all_teams: all_teamsReducer,
  team: teamReducer,
  training: trainingReducer,
  recruiting: recruitingReducer,
  field: fieldReducer,
  registration: registrationReducer,
//   registered: registeredReducer,
  
  event: eventReducer,
  admin: adminReducer,
});

export default persistReducer(persistConfig, rootReducer);
