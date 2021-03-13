import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LeadBordCard from '../Components/LeadBordCard'
import {connect } from 'react-redux'

class LeaderBoard extends Component {
  render() {
    if (
      Object.keys(this.props.users).length === 0
    ) {
      return <Redirect to="/" />;
    }
    const users = [];
    for (let user in this.props.users) {
      if (user === this.props.user.id) {
        users.push(this.props.user);
      } else {
        users.push(this.props.users[user]);
      }
    }
    users.sort((a, b) => {
      const AnsQA = Object.keys(a.answers).length;
      const createdQA = a.questions.length;
      const AnsQB = Object.keys(b.answers).length;
      const createdQB = b.questions.length;
      return (AnsQB + createdQB) - (AnsQA + createdQA);
    })
    return (
      <div>
        {users.map((user) => {
          return <LeadBordCard key={user.id} user={user} />
        })}
      </div>
    );
  }
}

export default connect((state) => ({
  users: state.users,
  user: state.authUser
}))(LeaderBoard);
