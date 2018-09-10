import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

import InputBar from './input.component';
import ShowTabs from './tabs.component';

let usersList = [];

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      usersList: usersList,
      activeUser: "",
    };
  }

  componentWillUnmount() {
    usersList = this.state.usersList;
  }

  handleChange = inputValue => {
    let splittedInputValue = inputValue.split(" ");

    this.setState({
      usersList: splittedInputValue,
    })
  };

  handleActivateUserClick = activeUser => {
    this.setState({
      activeUser
    })
  };

  componentDidUpdate() {
    console.log(this.state.usersList);
    console.log(this.state.activeUser);
  }

  render() {
    return(
      <div>
        <ShowTabs
          usersList = {this.state.usersList}
          onClick = {this.handleActivateUserClick}
        />
        <InputBar
          placeholder="Type here"
          onChange={this.handleChange}
        />
        <Link to={{
          pathname: "/user/" + this.state.activeUser,
          state: {
            activeUserData: this.state.activeUser,
          },
        }}>
          <button>Confirm</button>
        </Link>
      </div>
    );
  }
}

export default Main;