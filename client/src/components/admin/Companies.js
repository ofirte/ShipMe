import React from "react";
import { connect } from "react-redux";
import {FloatLeftDiv } from "../shared/styles";
import { getAllCompanies, companyDelete } from "../../actions/companyActions";
import CompanyEntry from "./CompanyEntry";
import Account from "../account/Account";
import Company from "../company/Company";
import styled from "styled-components";
const titles = [
  "Company name",
  "Address",
  "Email",
  "Website",
  "Contact number",
  "Contact name",
  "Contact Job Title",
];
const Th = styled("th")`
  width: auto;
  padding-left: 20px;
  border: "1px soild grey";
  text-align: left;
`;
const Button = styled("button")`
  border-radius: 15px;
  background-color: skyblue;
`;
const Div = styled("div")`
  position: absolute;
  top: 80px;
  left: 150px;
  width: 100%;
`;
class Companies extends React.Component {
  state = { renderEditCompany: false, renderEditAccount: false,term:'' };
  componentDidMount() {
    this.props.getAllCompanies();
    // this.setState({ renderEditAccount: true });
  }
  renderCompanies() {
    if (!this.props.companies) return;
    return this.props.companies.filter((company)=> company.name
    .toLocaleLowerCase()
    .includes(this.state.term.toLocaleLowerCase())).map((company,index) => {
      const companyData = {
        name: company.name ? company.name : "None",
        address: company.address ? company.address : "None",
        email: company.email ? company.email : "None",
        website: company.website ? company.website : "None",
        contactNumber: company.contactNumber ? company.contactNumber : "None",
        contactName: company.contactName ? company.contactName : "None",
        contactJobTitle: company.contactJobTitle
          ? company.contactJobTitle
          : "None",
      };
      return (
        <CompanyEntry key={index}
          onEditCompanyClick={(compId) => {
            console.log(compId);
            localStorage.setItem("selectedCompany", compId);
            this.setState({
              renderEditCompany: true,
              renderEditAccount: false,
            });
          }}
          onEditAccountClick={(compId) => {
            localStorage.setItem("selectedCompany", compId);
            this.setState({
              renderEditCompany: false,
              renderEditAccount: true,
            });
          }}
          onDeleteCompanyClick={(compId) => {
            this.props.companyDelete(compId);
          }}
          companyData={companyData}
          company={company}
        ></CompanyEntry>
      );
    });
  }
  renderTitles() {
    return titles.map((entry,index) => <Th key={index}>{`${entry}`}</Th>);
  }
  renderCompanysTable() {
    return (
      <Div>
        <input
          onChange={(e) => this.setState({ term: e.target.value })}
          type="text"
          placeholder="Search"
          style={{ borderRadius: "10px", display: "inline-block",marginBottom:'10px' }}
        ></input>
        <table style={{ borderCollapse: "collapse" }}>
          <tr>{this.renderTitles()}</tr>
          {this.renderCompanies()}
        </table>
      </Div>
    );
  }
  renderEditCompany() {
    return (
      <div>
        <FloatLeftDiv top="60px" left="50px">
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            Back
          </Button>
        </FloatLeftDiv>
        <Company></Company>
      </div>
    );
  }
  renderEditAccount() {
    return (
      <div>
        <FloatLeftDiv top="60px" left="50px">
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            Back
          </Button>
        </FloatLeftDiv>
        <Account />
      </div>
    );
  }
  render() {
    if (this.props.auth) {
      if (this.props.auth.data.userType !== 2)
        return <h1 style={{ position: "absolute", top: "80px" }}>No Access</h1>;
      if (this.state.renderEditAccount)
        return <div>{this.renderEditAccount()}</div>;
      if (this.state.renderEditCompany)
        return <div>{this.renderEditCompany()}</div>;
      return <div>{this.renderCompanysTable()}</div>;
    }
    return <div>No access</div>;
  }
}
const mapStateToProps = (state) => {
  return { companies: state.allCompanies, auth: state.auth };
};
export default connect(mapStateToProps, { getAllCompanies, companyDelete })(
  Companies
);
