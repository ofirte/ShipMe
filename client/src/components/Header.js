import React from "react";
import { connect } from "react-redux";
import { fetchCompanies, fetchCompanyData } from "../actions/companyActions";
import { logout } from "../actions/authActions";

import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
const HeaderWrapper = styled("div")`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-color: skyblue;
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
`;
const HeaderLink = styled("div")`
  float: left;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
`;
class Header extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("selectedCompany")) {
      this.props.fetchCompanies();
      this.props.fetchCompanyData();
    }
    document.body.style.background = "white";
  }
  renderHeader() {
    if (!localStorage.getItem("selectedCompany")) return;
    return (
      <HeaderWrapper>
        <a href="#default">CompanyLogo</a>
        <div style={{ float: "right" }}>
          <HeaderLink>
            <Link to="/account">Account</Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/profile">Profile</Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/company">Company</Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/companies">Companies</Link>
          </HeaderLink>
          <button
            onClick={() =>
              this.props.logout(this.props.auth, this.props.history)
            }
          >
            logout
          </button>
        </div>
      </HeaderWrapper>
    );
  }
  render() {
    return <div>{this.renderHeader()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, {
  logout,
  fetchCompanies,
  fetchCompanyData,
})(withRouter(Header));
