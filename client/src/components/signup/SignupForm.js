import { reduxForm, Field } from "redux-form";
import React from "react";
import FormField from "../FormFiled";
import { signUp } from "../../actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FormSubmit, HeaderDiv, MiddleDiv } from "../shared/styles";
const fields = [
  { label: "first name", name: "firstName", type: "text" },
  { label: "Last name", name: "lastName", type: "text" },
  { label: "Email Address", name: "email", type: "text" },
  { label: "Password", name: "password", type: "password" },
  { label: "confirm password", name: "confrimPassword", type: "password" },
];
class SignupForm extends React.Component {
  renderFields() {
    return fields.map((field, index) => (
      <Field
        key={index}
        type={field.type}
        name={field.name}
        label={field.label}
        component={FormField}
      ></Field>
    ));
  }
  render() {
    return (
      <MiddleDiv>
        <HeaderDiv>
          <h1>ship-ME</h1>
          <h3>Sign up</h3>
        </HeaderDiv>
        <form
          onSubmit={this.props.handleSubmit(() =>
            this.props.signUp(
              this.props.formValues.signupForm.values,
              this.props.history
            )
          )}
        >
          {this.renderFields()}
          <FormSubmit type="submit" value="Sign up" />
        </form>
      </MiddleDiv>
    );
  }
}
const mapStateToProps = (state) => {
  return { formValues: state.form, auth: state.auth };
};
const validate = (values) => {
  const passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/;
  const errors = {};
  fields.forEach((field) => {
    if (!values[field.name]) errors[field.name] = "You must provide a value!";
  });
  if (values["password"] !== values["confrimPassword"]) {
    errors["password"] = "passwords dont match!";
  }
  if (!passReg.test(values["password"]))
    errors["password"] =
      "password must contain  one lower case letter,\n one upper case letter, one digit, one non-word character and be longer\n the 8 symboles!";
  return errors;
};
const decoratedComponent = connect(mapStateToProps, { signUp })(
  withRouter(SignupForm)
);
export default reduxForm({
  form: "signupForm",
  validate,
})(decoratedComponent);
