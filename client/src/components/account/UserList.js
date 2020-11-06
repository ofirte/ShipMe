import React from "react";
import { connect } from "react-redux";
import UserEntry from "./UserEntry";
import { fetchCompanyUsers } from "../../actions/companyActions";
import { fetchUserToList, onUserDelete } from "../../actions/userActions";
class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchCompanyUsers();
  }
  componentDidUpdate(prevProps) {
    if (
      !prevProps.companyUsers &&
      prevProps.companyUsers !== this.props.companyUsers
    ) {
      this.props.companyUsers.map((user, index) => {
        this.props.fetchUserToList(user.userId);
        return "";
      });
    }
  }

  onDeleteUser = (userId) => {
    this.props.onUserDelete(userId);
  };
  renderUsers() {
    if (this.props.usersList)
      return this.props.usersList
        .filter((user) =>
          `${user.firstName} ${user.lastName}`
            .toLocaleLowerCase()
            .includes(this.props.term.toLocaleLowerCase())
        )
        .map((user) => (
          <UserEntry
            key={user._id}
            imageUrl={user.imageUrl}
            firstName={user.firstName}
            lastName={user.lastName}
            jobTitle={user.jobTitle}
            onUserEdit={this.props.onUserEdit}
            onUserDelete={this.onDeleteUser}
            id={user._id}
            managerId={this.props.companyUsers?this.props.companyUsers[0].userId:''}
          />
        ));
    return;
  }
  render() {
    return (
      <div>
        <h5>userList!</h5>
        {this.renderUsers(this.props.term)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    companyUsers: state.companyUsers,
    usersList: state.usersList,
    companyData: state.companyData,
  };
};
export default connect(mapStateToProps, {
  onUserDelete,
  fetchCompanyUsers,
  fetchUserToList,
})(UserList);
