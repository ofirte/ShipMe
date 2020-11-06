import React from "react";

class CompanyEntry extends React.Component {
  renderData() {
    const data = Object.entries(this.props.company).map((entry, index) =>
      index === 0 ? <td></td> : <td key={index}>{`${entry[1]}`}</td>
    );
    data.splice(0, 1);
    data.push(this.renderButtons(Object.entries(this.props.company)[0][1]));
    return data;
  }
  renderButtons(companyId) {
    return (
      <td>
        <button onClick={() => this.props.onEditCompanyClick(companyId)}>
          Edit company
        </button>
        <button onClick={() => this.props.onEditAccountClick(companyId)}>Edit account</button> <button>delete</button>
      </td>
    );
  }
  render() {
    console.log(Object.entries(this.props.company));
    return <tr>{this.renderData()}</tr>;
  }
}
export default CompanyEntry;
