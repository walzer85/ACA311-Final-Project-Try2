import React, { Component } from "react";


class UserList extends Component {
  constructor() {
    super();
  }
  
  render() {
    
    const filterUsers = this.props.users.filter((u) => {
      return u.first_name.indexOf(this.props.searchText) > -1;
    });

    userDivs = filterUsers.map((user,i) => {
      return (
        <div key={i}>
          {user.first_name} - {user.last_name}
          <a href="#" onClick={
            (e) => {
              e.preventDefault();
              this.props.setUser(user);
            }
          }> View </a>
        </div>);
    });

    return (
      <div class="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style="width:200px;" id="mySidebar">
        <button class="w3-bar-item w3-button w3-large w3-hide-large" onclick="w3_close()">Close &times;</button>
        
      </div>
    )
  }
}

//I still have lots of work to do.  In its current state it is a boilerplate list displaying in a collapsable nav.