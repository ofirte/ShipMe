import React from 'react'
import UserList from "./UserList";
class SearchBar extends React.Component{
    state={term:''}
    render(){
       return(<div> <button onClick={this.props.onCreateUser}>new user</button>
          <form onSubmit={(e)=>e.preventDefault()}>
            <input
              onChange={(e) => this.setState({term:e.target.value})}
              type="text"
              placeholder="Search"
            ></input>
          </form>
          <UserList onUserEdit={this.props.onUserEdit} term={this.state.term}/>
          <button onClick={this.props.onCreateCompanyClick}>Create new company</button>
          </div>)
    }
}
export default SearchBar