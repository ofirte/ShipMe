import React from "react";
import Avatar from "react-avatar";

const UserEntry = (props) => {
  
  const renderButtons = () => {
    if (props.managerId!==props.id)
      return (
        <span>
          {" "}
          <button
            style={{ display: "inline" }}
            onClick={() => props.onUserEdit(props.id)}
          >
            edit
          </button>
          <button
            style={{ display: "inline" }}
            onClick={() => props.onUserDelete(props.id)}
          >
            delete
          </button>{" "}
        </span>
      );
    return <h5 style={{ display: "inline" }}>   Manager</h5>
  };
  return (
    <div>
      <Avatar
        size="20"
        facebook-id="invalidfacebookusername"
        src={props.imageUrl}
        round={true}
      />
      <h5
        style={{ display: "inline" }}
      >{` ${props.firstName} ${props.lastName}`}</h5>
      <h5 style={{ display: "inline" }}>{` ${props.jobTitle}`}</h5>
      {renderButtons()}
    </div>
  );
};
export default UserEntry;
