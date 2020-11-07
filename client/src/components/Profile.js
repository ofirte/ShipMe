import React from "react";
import { connect } from "react-redux";
import { ProfileFetch,updateProfile } from "../actions/authActions";
import BaseForm from "./BaseForm";
const validate = (values) => {
  const errors = {};
  const passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/;
  if (values["newPassword"] !== values["confrimPassword"]) {
    errors["newPassword"] = "passwords dont match!";
  }
  if (values["newPassword"])
    if (!passReg.test(values["newPassword"]))
      errors["newPassword"] =
        "password must contain  one lower case letter,\n one upper case letter, one digit, one non-word character and be longer\n the 8 symboles!";
  return errors;
};
const fields = [
  { label: "First name", name: "firstName", type: "text" },
  { label: "Last name", name: "lastName", type: "text" },
  { label: "Job title", name: "jobTitle", type: "text" },
  { label: "Primary phone number", name: "primaryPhoneNumber", type: "text" },
  {
    label: "Secondary phone number",
    name: "secondaryPhoneNumber",
    type: "text",
  },
  { label: "Primary email", name: "email", type: "text" ,read:true},
  { label: "Secondary email", name: "secondaryEmail", type: "text" },
  { label: "old password", name: "oldPass", type: "password" },
  { label: "New password", name: "newPassword", type: "password" },
  { label: "Confirm password", name: "confrimPassword", type: "password" },
];
class Profile extends React.Component {
  componentDidMount() {
    this.props.ProfileFetch();
  }
  update=(formValues)=>{
        this.props.updateProfile(
            formValues.profileForm.values,
            this.props.auth.data._id
        )
  }
  render() {
    return (
      <div>
        hola
        <BaseForm
          fields={fields}
          data={this.props.auth ? this.props.auth.data : {}}
          updateData={this.update}
          validate={validate}
          formName="profileForm"
          imgFrom="profile"
          size='310px'
        ></BaseForm>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { ProfileFetch ,updateProfile})(Profile);

