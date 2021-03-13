import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';


class QCard extends Component {
  render() {
    return (
      <div className="q-card-p">
        <div>{this.props.users[this.props.question.author].name} asks:</div>
        <div className="q-card">
          <img src={this.props.users[this.props.question.author].avatarURL} />
          <div>
            <p>Would you Rather</p>
            <p>..{this.props.question.optionOne.text.slice(0, 6)}..</p>
            <Link to={`questions/${this.props.question.id}`}>View Poll</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect((state)=>({users: state.users, user: state.authUser}))(QCard));