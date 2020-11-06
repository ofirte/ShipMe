import React from "react";
import { connect } from "react-redux";
import { Content } from "../shared/styles";
import { getAllCompanies } from "../../actions/companyActions";
import CompanyEntry from "./CompanyEntry";
import Account from "../account/Account";
import Company from "../company/Company";
const titles = [
  "Company name",
  "Address",
  "Email",
  "Website",
  "Contact number",
];
class Companies extends React.Component {
  state = { renderEditCompany: false, renderEditAccount: false };
  componentDidMount() {
    this.props.getAllCompanies();
    // this.setState({ renderEditAccount: true });
  }
  renderCompanies() {
    if (!this.props.companies) return;
    return this.props.companies.map((company) => (
      <CompanyEntry
        onEditCompanyClick={(compId) => {
          console.log(compId);
          localStorage.setItem("selectedCompany", compId);
          this.setState({ renderEditCompany: true, renderEditAccount: false });
        }}
        onEditAccountClick={(compId) => {
          localStorage.setItem("selectedCompany", compId);
          this.setState({ renderEditCompany: false, renderEditAccount: true });
        }}
        company={company}
      ></CompanyEntry>
    ));
  }
  renderTitles() {
    return titles.map((entry) => (
      <span style={{ display: "inline" }}>
        <th>{`${entry}`}</th>
      </span>
    ));
  }
  renderCompanysTable() {
    return (
      <table>
        <tr>{this.renderTitles()}</tr>
        {this.renderCompanies()}
      </table>
    );
  }
  renderEditCompany() {
    return (
      <div>
        <button
         onClick={() => {
            this.setState({renderEditCompany: false, renderEditAccount: false})
          }}
        >
          Back
        </button>
        <Company></Company>
      </div>
    );
  }
  renderEditAccount() {
    return (
      <div>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Back
        </button>
        <Account />
      </div>
    );
  }
  render() {
    if (this.props.auth) {
      if (this.props.auth.data.userType !== 2) return <h1>No Access</h1>;
      if (this.state.renderEditAccount)
        return <Content>{this.renderEditAccount()}</Content>;
      if (this.state.renderEditCompany)
        return <Content>{this.renderEditCompany()}</Content>;
      return <Content>{this.renderCompanysTable()}</Content>;
    }
    return <div>No access</div>
  }
}
const mapStateToProps = (state) => {
  return { companies: state.allCompanies, auth: state.auth };
};
export default connect(mapStateToProps, { getAllCompanies })(Companies);
