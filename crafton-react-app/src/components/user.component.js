import React, {PureComponent} from 'react';
import {browserHistory} from 'react-router';

class UserDetails extends PureComponent {

  fetchDataFromAPI = () => {
    const API = 'https://api.github.com/users/';
    const DEFAULT_QUERY = this.props.match.params.activeUser;

    return(
      fetch(API + DEFAULT_QUERY)
        .then(response => response.json())
        .then(data => {
          const activeUserData = data;
          return activeUserData;
        })
        .catch(error => console.log('DATA FETCH ERROR', error))
    )
  };

  componentDidMount() {
    this.fetchDataFromAPI();
  }

  render() {
    this.fetchDataFromAPI().then((activeUserData) => {
      console.log(activeUserData);
    });
    return(
      <div>
        {this.props.match.params.activeUser}
        {this.props.location.state.activeUser}
        <button onClick={this.props.history.goBack}>
          Return
        </button>
      </div>
    )
  }
}

export default UserDetails;