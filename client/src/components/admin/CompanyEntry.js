import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { FloatRightDiv, SimpleButton } from "../shared/styles";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
const Td = styled("td")`
  width: auto;
  padding-left: 20px;
  padding-top: 20px;
`;
class CompanyEntry extends React.Component {
  state={display:'none'}
  renderData() {
    const data = Object.entries(this.props.companyData).map((entry, index) => (
      <Td key={index}>{`${entry[1]}`}</Td>
    ));
    data.push(this.renderButtons(Object.entries(this.props.company)[0][1]));
    return data;
  }
  renderButtons(companyId) {
    return (
        <FloatRightDiv right="15px" top="7px">
          <ul style={{ listStyleType: "none" }}>
          <li  >
              <SimpleButton
                onClick={() => this.setState({display:this.state.display==="none" ? "" : "none"})}
              >
                <FontAwesomeIcon icon={faEllipsisH} />
              </SimpleButton>
            </li>
            <FloatRightDiv right="15px" top="7px">

            <li  style={{ display: this.state.display }}>
              <SimpleButton onClick={() => this.props.onEditCompanyClick(companyId)}>
                Edit company
              </SimpleButton>
            </li >
            <li  style={{ display: this.state.display }}>
              <SimpleButton onClick={() => this.props.onEditAccountClick(companyId)}>
                Edit account
              </SimpleButton>
            </li>
            <li  style={{ display: this.state.display }}>
              <SimpleButton onClick={()=>this.props.onDeleteCompanyClick(companyId)}>delete</SimpleButton>
            </li>
            </FloatRightDiv>

          </ul>
        </FloatRightDiv>
    );
  }
  render() {
    return <tr>{this.renderData()}</tr>;
  }
}
export default CompanyEntry;
