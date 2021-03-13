import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class AnsweredQ extends Component {
  submitForm = () => {};
  render() {
    if (
      Object.keys(this.props.questions).length === 0 ||
      Object.keys(this.props.questions).length === 0
    ) {
      return <Redirect to="/" />;
    }
    const q = this.props.questions[this.props.match.params.question_id];
    return (
      <div>
        <div className="q-card-p">
          <div>{this.props.users[q.author].name} asks:</div>
          <div className="q-card">
            <img src={this.props.users[q.author].avatarURL} />
            <div>
              <p>Results</p>
              <p>{q.optionOne.text}?</p>
              <div className="bar-empty">
                <div className="bar-filled" style={{width="70%"}}></div>
              </div>
              <p>{q.optionTwo.text}?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  questions: state.questions,
  users: state.users,
}))(AnsweredQ);
