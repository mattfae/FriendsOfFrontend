import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          successfulPOST: true
        })
      });
  }


  render() {

    if (this.state.successfulPOST === true)

        return <FriendsOf username={this.state.username} />

    else

    return (
      <div className="App-Main">
        <Router>
          <MyNavbar />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/friendsof">
              <FriendsOf username={this.state.username} />
            </Route>
            {/* <Route path="/">
              <SomeComponent />
            </Route> */}
            <Route path="/">
              <AccountSelector handleSubmit={this.handleSubmit} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
