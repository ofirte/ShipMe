import React from "react";
import { connect } from "react-redux";
import CompanySelectForm from "./companySelect/CompanySelectForm";
import Login from "./Login/Login";
class Landing extends React.Component {

  renderLand() {
    if (this.props.auth === null) return;
    else if (!this.props.auth) return <Login></Login>;
    else if (!localStorage.getItem('selectedCompany')) return <CompanySelectForm />;
    else
      return <div style={{position:'absolute',top:'80px',left:'39%'}}><h1>Welcome to ShipMe</h1>
      <p style={{textAlign:'center'}}>your new Home for deliveries</p></div>
  }
  render() {
    return <div>{this.renderLand()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth, selectedCompany: state.selectedCompany };
};
export default connect(mapStateToProps)(Landing);
