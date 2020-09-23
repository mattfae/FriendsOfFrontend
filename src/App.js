import React from 'react';
import { Component } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import AccountSelector from './components/AccountSelector';
import FriendsOf from './components/FriendsOf';


class App extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      successfulPOST: false
    }
  }


  handleSubmit = (event, inputName) => {
    event.preventDefault();
    const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "username": inputName
              })
            }
    fetch('http://localhost:3000/twitter_accounts', reqObj)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
        this.setState({
          username: inputName,
          successfulPOST: true,
          twitterId: resp.twitter_account_id
        })
      });
  }


  render() {
    if (this.state.successfulPOST === true)
        return (
          <div>
          <MyNavbar username={this.state.username} />
          <FriendsOf username={this.state.username} twitterId={this.state.twitterId} />
          </div>
        );
    else
        return (
          <div className="App-Main">
            <MyNavbar />
            <AccountSelector handleSubmit={this.handleSubmit} />
          </div>
        );
  }
}

export default App;
