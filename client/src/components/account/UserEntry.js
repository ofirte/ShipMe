import React, { useState } from "react";
import Avatar from "react-avatar";
import { SimpleButton, FloatRightDiv, Li} from "../shared/styles";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
const P = styled("p")`
  line-height: 0.1px;
  text-indent: 3em;
`;
const UserEntry = (props) => {
  const [display, setDisplay] = useState("none");
  const renderButtons = () => {
    if (props.managerId !== props.id)
      return (
        <FloatRightDiv right="15px" top="7px">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <SimpleButton
                onClick={() => setDisplay(display === "none" ? "" : "none")}
              >
                <FontAwesomeIcon icon={faEllipsisH} />
              </SimpleButton>
            </li>
            <li style={{ display: display }}>
              {" "}
              <SimpleButton onClick={() => props.onUserEdit(props.id)}>
                edit
              </SimpleButton>
            </li>
            <li style={{ display: display }}>
              <SimpleButton onClick={() => props.onUserDelete(props.id)}>
                delete
              </SimpleButton>
            </li>
          </ul>
        </FloatRightDiv>
      );
    return <h5 style={{ display: "inline" }}> Manager</h5>;
  };
  return (
    <Li>
      <Avatar
        size="40"
        facebook-id="invalidfacebookusername"
        src={props.imageUrl}
        round={true}
      />
      <div style={{ display: "inline" }}>
        <h4
          style={{ display: "inline" ,color:'skyblue'}}
        >{` ${props.firstName} ${props.lastName}`}</h4>
        <p style={{ display: "inline" }}>{`  ${props.email}`}</p>
        {renderButtons()}

        <P>{`${props.jobTitle}`}</P>
      </div>
    </Li>
  );
};
export default UserEntry;
