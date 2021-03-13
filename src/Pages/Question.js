import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import { handleSaveQAns } from '../Store/actions/auth';
import { classStart } from '../Store/actions/class';

class Question extends Component {

  state = {
    selectedRadio: null,
    notFound: false
  }

  chooseOne = (q) => {
    if (Object.keys(this.props.user.answers).includes(q.id)) {
        this.props.classStart(this.props.user.answers[q.id]);
    }
  }
  
  componentDidMount() {
    const q = this.props.questions[this.props.match.params.question_id];
    if (!q) {
      return this.setState({
        notFound: true
      })
    }
    this.chooseOne(q);
  }

  submitForm = (q) => {
    if (!this.state.selectedRadio) {
      return;
    }
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
      Object.keys(this.props.users).length === 0 ||
      Object.keys(this.props.questions).length === 0 ||
      this.state.notFound
      ) {
        return (
          <Redirect to='/404' />
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
                <div className={this.props.class.one}>
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
                <div className={this.props.class.two}>
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
                <input
                  id="optionOne"
                  type="radio"
                  value={q.optionOne.text}
                  name="poll"
                  onClick={this.selectRadio}
                />
                {q.optionOne.text}
                <input
                  id="optionTwo"
                  type="radio"
                  value={q.optionTwo.text}
                  name="poll"
                  onClick={this.selectRadio}
                />
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
  user: state.authUser,
  class: state.classChange
}), (dispatch) => ({
  submitA: (ans) => dispatch(handleSaveQAns(ans)),
  classStart: (ans) => dispatch(classStart(ans))
}))(Question);