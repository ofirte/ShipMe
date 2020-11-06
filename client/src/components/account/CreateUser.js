import React from "react";
import { connect } from "react-redux";
import {createUser } from "../../actions/authActions";
import BaseForm from "../BaseForm";
const validate = (values) => {
  const errors = {};
  const passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/;
  if (values["password"] !== values["confrimPassword"]) {
    errors["password"] = "passwords dont match!";
  }
  if (values["password"])
    if (!passReg.test(values["password"]))
      errors["password"] =
        "password must contain  one lower case letter,\n one upper case letter, one digit, one non-word character and be longer\n the 8 symboles!";
  return errors;
};
const fields = [
  { label: "First name", name: "firstName", type: "text" },
  { label: "Last name", name: "lastName", type: "text" },
  { label: "Job title", name: "jobTitle", type: "text" },

  { label: "Email", name: "email", type: "text" },
  { label: "Phone", name: "primaryPhoneNumber", type: "text" },

  {
    label: "User type",
    name: "userType",
    type: "select",
    options: [
      {
        value: 0,
        name: "employee",
      },
      { value: 1, name: "manager" },
    ],
  },
  { label: "password", name: "password", type: "password" },
  { label: "Confirm password", name: "confrimPassword", type: "password" },
];
class CreateUser extends React.Component {
  update = (formValues) => {
    if (this.props.image) formValues.createUserForm.values.imageUrl = this.props.image;
    this.props.createUser(
      formValues.createUserForm.values,
    );
    this.props.onSubmit()
  };
  render() {
    return (
      <div>
        <BaseForm
          fields={fields}
          data={{}}
          updateData={this.update}
          validate={validate}
          formName="createUserForm"
          imgFrom="profile"
          noUpdateDb={true}
        ></BaseForm>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    image:state.image
  };
};
export default connect(mapStateToProps, { createUser })(
  CreateUser
);
