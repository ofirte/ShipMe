import React from "react";
import { connect } from "react-redux";
import { addCompany } from "../../actions/companyActions";
import BaseForm from "../BaseForm";
import { FloatLeftDiv } from "../shared/styles";
const validate = (values) => {
  const errors = {};
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!re.test(values["email"]) && values["email"] !== "")
    errors.email = "not a vaild email";
  if (!values["name"]) errors.name = "You must provide a value";
  return errors;
};
const fields = [
  { label: "Company name", name: "name", type: "text" },
  { label: "Company address", name: "address", type: "text" },
  { label: "City", name: "city", type: "text" },
  { label: "Company email", name: "email", type: "text" },
  { label: "Company website", name: "website", type: "text" },
  { label: "Primary contact name", name: "contactName", type: "text" },
  { label: "Primary contact name", name: "contactNumber", type: "text" },
  { label: "Contact job title", name: "contactJobTitle", type: "text" },
];
class CreateComapny extends React.Component {
  update = (formValues) => {
    if (this.props.image) formValues.createCompanyForm.values.imageUrl = this.props.image;
    this.props.addCompany(formValues.createCompanyForm.values);
    this.props.onSubmit();
  };
  render() {
    return (
      <FloatLeftDiv>
        <BaseForm
          fields={fields}
          data={{}}
          updateData={this.update}
          validate={validate}
          formName="createCompanyForm"
          imgFrom="profile"
          noUpdateDb={true}
          size='100px'
        ></BaseForm>
      </FloatLeftDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    image: state.image,
  };
};
export default connect(mapStateToProps, { addCompany })(CreateComapny);
