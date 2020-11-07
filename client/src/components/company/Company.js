// import React from 'react'
// import { Content } from '../shared/styles'
// import CompanyForm from './CompanyForm'

// const Company=()=>{
//     return <Content><CompanyForm/></Content>
// }
// export default Company
import React from "react";
import { connect } from "react-redux";
import {
  fetchCompanyData,
  updateCompanyData,
} from "../../actions/companyActions";
import BaseForm from "../BaseForm";
const validate = (values) => {
  const errors = {};
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!re.test(values["email"]) && values["email"] !== "")
    errors.email = "not a vaild email";
  return errors;
};
const fields = [
  { label: "Company name", name: "name", type: "text" },
  { label: "Company address", name: "address", type: "text" },
  { label: "City", name: "city", type: "text" },
  { label: "Company email", name: "email", type: "text" },
  { label: "Company website", name: "website", type: "text" },
  { label: "Primary contact name", name: "contactName", type: "text" },
  { label: "Primary contact Number", name: "contactNumber", type: "tel" },
  { label: "Contact job title", name: "contactJobTitle", type: "text" },
];
class Company extends React.Component {
  componentDidMount() {
    this.props.fetchCompanyData();
  }
  update = (formValues) => {
    this.props.updateCompanyData(formValues.companyForm.values);
  };
  render() {
    if (this.props.auth)
      if (
        this.props.auth.data.userType === 2 &&
        window.location.pathname === "/company"
      )
        return (
          <h1 style={{ position: "absolute", top: "80px" }}>
            Super admin user has no spesific account,
            <br /> view any account from companies bar
          </h1>
        );
    return (
      <div>
        hola
        <BaseForm
          fields={fields}
          data={this.props.companyData ? this.props.companyData : {}}
          updateData={this.update}
          validate={validate}
          formName="companyForm"
          imgFrom="company"
          size="310px"
        ></BaseForm>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    companyData: state.companyData,
  };
};
export default connect(mapStateToProps, {
  fetchCompanyData,
  updateCompanyData,
})(Company);
