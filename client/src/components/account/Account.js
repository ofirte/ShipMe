import React from "react";
import { Content } from "../shared/styles";
import { connect } from "react-redux";
import { fetchCompanyData } from "../../actions/companyActions";
import { onUserEdit } from "../../actions/userActions";
import CreateUser from "./CreateUser";
import SearchBar from "./SearchBar";
import EditUser from "./EditUser";
import CreateCompany from "./CreateCompany";
class Account extends React.Component {
  state = {
    createUserRender: false,
    editRender: false,
    createCompanyRender: false,
  };
  componentDidMount() {
    this.props.fetchCompanyData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userInfo !== this.props.userInfo)
      this.setState({ createUserRender: false, editRender: true });
  }
  onUserEdit = (userId) => {
    this.setState({ createUserRender: false, editRender: false });
    this.props.onUserEdit(userId);
  };
  renderSearchBar() {
    return (
      <SearchBar
        onUserEdit={this.onUserEdit}
        onCreateUser={() =>
          this.setState({ createUserRender: true, editRender: false ,createCompanyRender:false})
        }
        onCreateCompanyClick={()=>this.setState({ createUserRender: false, editRender: false,createCompanyRender:true })}
      />
    );
  }
  renderCreateCompany() {
    return <CreateCompany onSubmit={() => {
      this.setState({ createCompanyRender: false });
    }} />;
  }
  renderCreateUser() {
    return (
      <CreateUser
        onSubmit={() => {
          this.setState({ createUserRender: false });
        }}
      />
    );
  }
  renderEditUser() {
    return (
      <EditUser
        close={() => {
          this.setState({ createUserRender: false});
        }}
        userInfo={this.props.userInfo}
      />
    );
  }
  renderContent() {
    if (this.props.auth)
      if (this.props.auth.data.userType === 0) return <h1>no Access</h1>;
    if (this.state.createUserRender)
      return (
        <div>
          {this.renderSearchBar()}
          {this.renderCreateUser()}
        </div>
      );
    if (this.state.editRender)
      return (
        <div>
          {this.renderSearchBar()}
          {this.renderEditUser()}
        </div>
      );
    if (this.state.createCompanyRender)
      return (
        <div>
          {this.renderSearchBar()}
          {this.renderCreateCompany()}
        </div>
      );
    return <div>{this.renderSearchBar()}</div>;
  }

  render() {
    return <Content>{this.renderContent()}</Content>;
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    userInfo: state.userInfo,
    companyUsers: state.companyUsers,
  };
};
export default connect(mapStateToProps, { fetchCompanyData, onUserEdit })(
  Account
);
