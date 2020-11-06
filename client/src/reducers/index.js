import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form'
import authReducer from "./authReducer";
import companyDataReducer from "./companyDataReducer";
import companyReducer from "./companyReducer";
import companyUsersReducer from "./companyUsersReducer";
import usersListReducer from "./userListReducer";
import userInfoReducer from './userInfoReducer'
import imageReducer from "./imageReducer";
import allCompaniesReducer from "./allCompaniesReducer";
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  companies:companyReducer,
  companyData:companyDataReducer,
  companyUsers:companyUsersReducer,
  usersList:usersListReducer,
  userInfo:userInfoReducer,
  image:imageReducer,
  allCompanies:allCompaniesReducer
});