import React from "react";
import { connect } from "react-redux";
import { ProfileFetch } from "../actions/authActions";
import Landing from "./Landing";
import Signup from "./signup/Signup";
import { BrowserRouter, Route } from "react-router-dom";
import Account from "./account/Account";
import Profile from "./Profile";
import Company from "./company/Company";
import Companies from "./admin/Companies";
import Header from "./Header";
class App extends React.Component {
  componentDidMount() {
    this.props.ProfileFetch();
    if (!localStorage.getItem("selectedCompany"))
      document.body.style.background = "rgb(25, 39, 69)";
    else    
    document.body.style.background = "white";

  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/" component={Header} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/companies" component={Companies} />

          {/* <Route exact path="/surveys" component={DashBoard} />
          <Route path="/surveys/new" component={CreateSurvey} /> */}
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, { ProfileFetch })(App);
