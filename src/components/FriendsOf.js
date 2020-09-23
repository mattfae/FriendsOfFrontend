import React from 'react';
import { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import FriendPair from './FriendPair';

class FriendsOf extends Component {

    componentDidMount() {
        console.log("friendsof props:", this.props.friendsOf)

        fetch(`http://localhost:3000/friendship_analyses/${this.props.twitterId}`)
        .then(resp => resp.json())
        .then(resp => {
          console.log(resp)
            // this.setState({
            //   username: inputName,
            //   successfulPOST: true,
            //   twitterId: resp.twitter_account_id
            // })
          });
    }

    renderFriendsOf() {
        const allFriendsOf = []
        
        // const someFriendsOf = allFriendsOf.map(friendId => (
        //     <FriendPair pair={friendId}/>
        // ));

        return (
            <div className="eachFriend">
                {allFriendsOf}
            </div>
        )
    }


    render() {

        return (
            <div>
            <h1>Friends Of Friends of {this.props.username}</h1>
            <Accordion defaultActiveKey="0">
                {this.renderFriendsOf()}
            </Accordion>    
            </div>
        )
    }
}

export default FriendsOf;
