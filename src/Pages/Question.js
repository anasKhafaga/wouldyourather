import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import { handleSaveQAns } from '../Store/actions/auth';

class Question extends Component {

  state = {
    classOne: null,
    classTwo: null,
    selectedRadio: null,
  }

  submitForm = (q) => {
    if (!this.state.selectedRadio) {
      return;
    }
    console.log(this.props.user, q.id, this.state.selectedRadio);
    this.props.submitA({
      authedUser: this.props.user.id,
      qid: q.id,
      answer: this.state.selectedRadio,
    });
  };

  selectRadio = (e) => {
    this.setState({
       selectedRadio: e.target.id
     })
   }

  render() {

    if (
      Object.keys(this.props.questions).length === 0 ||
      Object.keys(this.props.questions).length === 0
    ) {
      return (
        <Redirect to={`/questions/${this.props.match.params.question_id}`} />
      );
    }
    const q = this.props.questions[this.props.match.params.question_id];
    const votes = q.optionOne.votes.length + q.optionTwo.votes.length;
    const optionOnePer = (q.optionOne.votes.length / votes) * 100;
    const optionTwoPer = (q.optionTwo.votes.length / votes) * 100;
    return (
      <div>
        <div className="q-card-p">
          <div>{this.props.users[q.author].name} asks:</div>
          <div className="q-card">
            <img src={this.props.users[q.author].avatarURL} />
            {Object.keys(this.props.user.answers).includes(q.id) ? (
              <div>
                <p>Results</p>
                <div className={this.state.classOne}>
                  <p>{q.optionOne.text}?</p>
                  <div className="bar-empty">
                    <div
                      className="bar-filled"
                      style={{ width: `${optionOnePer}%` }}
                    >
                      {`${optionOnePer}%`}
                    </div>
                  </div>
                  <p>{`${q.optionOne.votes.length} out of ${votes} votes`}</p>
                </div>
                <div className={this.state.classTwo}>
                  <p>{q.optionTwo.text}?</p>
                  <div className="bar-empty">
                    <div
                      className="bar-filled"
                      style={{ width: `${optionTwoPer}%` }}
                    >
                      {`${optionTwoPer}%`}
                    </div>
                  </div>
                  <p>{`${q.optionTwo.votes.length} out of ${votes} votes`}</p>
                </div>
              </div>
            ) : (
              <div>
                <p>Would you Rather</p>
                <input  id="optionOne" type="radio" value={q.optionOne.text} name="poll" onClick={this.selectRadio} />
                {q.optionOne.text}
                <input  id="optionTwo" type="radio" value={q.optionTwo.text} name="poll" onClick={this.selectRadio} />
                {q.optionTwo.text}
                <button onClick={this.submitForm.bind(this, q)}>Submit</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  questions: state.questions,
  users: state.users,
  user: state.authUser
}), (dispatch) => ({
  submitA: (ans) => dispatch(handleSaveQAns(ans))
}))(Question);