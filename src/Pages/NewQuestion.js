import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { handleSaveQ } from '../Store/actions/questions';

class NewQuestion extends Component {

  submitQ = () => {
    if (!this.inputOne.value || !this.inputTwo.value) {
      return;
    }
    this.props.saveQ({ optionOneText: this.inputOne.value, optionTwoText: this.inputTwo.value, author: this.props.user.id });
  }

  render() {
    if (this.props.redirect) {
      return <Redirect to="/" />
    }
    return (
      <div className="q-card-p">
        <div>Create New Question</div>
        <div className="q-card">
          <div>
            <p>Would you Rather</p>
            <input
              type="text"
              placeholder="Enter Option One Text Here"
              ref={(input) => (this.inputOne = input)}
            />
            <p>OR</p>
            <input
              type="text"
              placeholder="Enter Option Two Text Here"
              ref={(input) => (this.inputTwo = input)}
            />
            <button onClick={this.submitQ}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({ users: state.users, user: state.authUser, redirect: state.redirect }),
    (dispatch) => ({
      saveQ: (q) =>
        dispatch(handleSaveQ(q)),
    })
  )(NewQuestion)
);
