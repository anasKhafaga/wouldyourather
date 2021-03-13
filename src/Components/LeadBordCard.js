import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';

class LeadBordCard extends Component {
  render() {
    const AnsQ = Object.keys(this.props.user.answers).length;
    const createdQ = this.props.user.questions.length;
    console.log(this.props.user)
    return (
      <div className="q-card-p">
        <div>{this.props.user.name}</div>
        <div className="q-card">
          <img src={this.props.user.avatarURL} />
          <div>
            <p>Answered Questions: {AnsQ }</p>
            <p>Created Questions: {createdQ }</p>
          </div>
          <div>
            Score: {AnsQ + createdQ}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect()(LeadBordCard)
);
