import React from "react";
import { fetchCompanies } from "../../actions/companyActions";
import { connect } from "react-redux";
import {
  FormSubmit,
  MiddleDiv,
  HeaderDiv,
  FormSelsect,
} from "../shared/styles";
class CompanySelectForm extends React.Component {
  state = { selectedCompany: null };
  componentDidMount() {
    this.props.fetchCompanies();
  }
  renderCompanies = () => {
    if (this.props.companies) {
      return this.props.companies.map((company) => (
        <option key={company._id} value={company._id}>
          {company.name}
        </option>
      ));
    }
  };

  render() {
    return (
      <MiddleDiv>
        <HeaderDiv>
          <h1>ship-ME</h1>
          <h3>Companies</h3>
        </HeaderDiv>
        <form
          onSubmit={(e) => {
            localStorage.setItem("selectedCompany", this.state.selectedCompany);
          }}
        >
          <FormSelsect
            id="comapny"
            name="comapny"
            placeholder="Choose your comapny"
            onChange={(e) => {
              this.setState({ selectedCompany: e.target.value });
            }}
          >
            <option selected="selected" disabled="disabled">
              Choose your company
            </option>

            {this.renderCompanies()}
          </FormSelsect>
          <FormSubmit type="submit" value="login" submit></FormSubmit>
        </form>
      </MiddleDiv>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth, companies: state.companies };
};

export default connect(mapStateToProps, { fetchCompanies })(CompanySelectForm);
