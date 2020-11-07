import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import UserList from "./UserList";
import { fetchCompanyUsers } from "../../actions/companyActions";
import { fetchUserToList } from "../../actions/userActions";
import ReactLoading from "react-loading";

const H3 = styled("h3")`
  line-height: 0.1px;
`;
const Button = styled("button")`
  float: ${(p) => p.float};
  border-radius: 15px;
  background-color: skyblue;
`;
class SearchBar extends React.Component {
  state = { term: "" ,load:true};
  componentDidMount() {
    this.props.fetchCompanyUsers();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.companyUsers.length === 0 &&
      prevProps.companyUsers !== this.props.companyUsers
    ) {
      this.props.companyUsers.map((user, index) => {
        this.props.fetchUserToList(user.userId);
        return "";
      });
    }
  }
  render() {
    if (this.props.companyUsers && this.props.usersList) {
      if (
        this.props.usersList.length === 0 ||
        this.props.companyUsers.length !== this.props.usersList.length
      ) {
        return (
          <ReactLoading type="bubbles" color="blue" height={667} width={375} />
        );
      }
    }
    return (
      <div>
        <H3>Users</H3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={(e) => this.setState({ term: e.target.value })}
            type="text"
            placeholder="Search"
            style={{ borderRadius: "10px", display: "inline-block" }}
          ></input>
          <Button float="right" onClick={this.props.onCreateUser}>
            new user
          </Button>
        </form>
        <UserList onUserEdit={this.props.onUserEdit} term={this.state.term} />
        <Button float="left" onClick={this.props.onCreateCompanyClick}>
          Create new company
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    companyUsers: state.companyUsers,
    usersList: state.usersList,
  };
};
export default connect(mapStateToProps, { fetchCompanyUsers, fetchUserToList })(
  SearchBar
);
