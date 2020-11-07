import React from "react";
import { connect } from "react-redux";
import { fetchCompanies, fetchCompanyData } from "../actions/companyActions";
import { logout } from "../actions/authActions";

import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Avatar from "react-avatar";
import { FloatLeftDiv } from "./shared/styles";
const HeaderWrapper = styled("div")`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: darkcyan;
  border-bottom: 3px solid grey;
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
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3yExOOPEm1JkFmB_GHgFb2Q60MYCCno2zqA&usqp=CAU"
          size="55"
          round={true}
        />
        <div style={{ float: "right" }}>
          <HeaderLink>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/account"
            >
              Account
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/profile"
            >
              Profile
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/company"
            >
              Company
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/companies"
            >
              Companies
            </Link>
          </HeaderLink>
        </div>
        <FloatLeftDiv top="20px" left='730px'>
          <button
            style={{ background: "darkcyan", border: "none",color:'white',fontSize:'15px' }}
            onClick={() =>
              this.props.logout(this.props.auth, this.props.history)
            }
          >
            logout
          </button>
        </FloatLeftDiv>
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
