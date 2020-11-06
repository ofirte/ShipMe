import { reduxForm, Field } from "redux-form";
import React from "react";
import { Link } from "react-router-dom";
import FormField from "../FormFiled";
import { fetchUser } from "../../actions/authActions";
import { connect } from "react-redux";
import { FormSubmit,MiddleDiv , HeaderDiv} from "../shared/styles";
const fields = [
  { label: "Email Address", name: "email", type: "text" },
  { label: "Password", name: "password", type: "password" },
];
class LoginForm extends React.Component {
  componentDidMount(){
    document.body.style.background='rgb(25, 39, 69)' 
  }
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
          <h3>Sign in</h3>
        </HeaderDiv>
        <form
          onSubmit={this.props.handleSubmit(() =>
            this.props.fetchUser(this.props.formValues.loginForm.values)
          )}
        >
          {this.renderFields()}
          <FormSubmit type="submit" value="login" submit></FormSubmit>
        </form>
        <Link to="/signup" style={{textAlign:"center"}}>not a member?</Link>
      </MiddleDiv>
    );
  }
}
const mapStateToProps = (state) => {
  return { formValues: state.form, auth: state.auth };
};

const validate = (values) => {
  const errors = {};
  fields.forEach((field) => {
    if (!values[field.name]) errors[field.name] = "You must provide a value!";
  });
  return errors;
};
const decoratedComponent = connect(mapStateToProps, { fetchUser })(LoginForm);
export default reduxForm({
  form: "loginForm",
  validate,
})(decoratedComponent);
