import React from "react";
import { connect } from "react-redux";
import BaseForm from "../BaseForm";
import {onUserUpdate} from '../../actions/userActions'
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
];
class EditUser extends React.Component {

  update=(formValues)=>{
        this.props.onUserUpdate(
            formValues.editUserForm.values,
            this.props.userInfo._id
        )
        this.props.close()
  }
  render() {
    return (
      <div>
        <BaseForm
          fields={fields}
          data={this.props.userInfo}
          updateData={this.update}
          validate={validate}
          formName="editUserForm"
          imgFrom="profile"
          url='/otheruser'
          userId={this.props.userInfo._id}
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
export default connect(mapStateToProps,{onUserUpdate})(EditUser);

