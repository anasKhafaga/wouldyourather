import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetQuestions} from '../Store/actions/questions'
import { List } from '../Components'
import { stopRedirect } from '../Store/actions/redirect';

class Home extends Component {

  state = {
    answered: false
  }

  changeView = (condition) => {
    if (condition === 'ans') {
      this.setState({
        answered: true
      })
    } else {
      this.setState({
        answered: false
      })
    }
  }

  filterQs = (Qs, filter) => {
    const proPreAns = Object.keys(Qs);
    const proPreUnAns = Object.keys(filter);
    const proAnsweredQs = proPreAns.filter(q => proPreUnAns.includes(q));
    const answeredQs = [];
    const unAnsweredQs = [];

    for (let key in Qs) {
      if (proAnsweredQs.includes(key)) {
        answeredQs.push(Qs[key]);
      } else {
        unAnsweredQs.push(Qs[key]);
      }
    }

    return { answeredQs, unAnsweredQs };
  }
  
  componentDidMount() {
    this.props.getQs();
    this.props.stoptheRedirect();
  }
  
  render() {
    const { answeredQs, unAnsweredQs } = this.filterQs(
      this.props.questions,
      this.props.user.answers
    );
    
    return (
      <div className="hp">
        <div className="hp-title">
          <p onClick={this.changeView.bind(this, 'notAns')}>Unanswered Questions</p>
          <p onClick={this.changeView.bind(this, 'ans')}>Answered Questions</p>
        </div>
        {this.state.answered ? (
          <List questions={answeredQs} />
        ) : (
          <List questions={unAnsweredQs} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions,
  user: state.authUser
});

const mapDispatchToProps = (dispatch) => ({
  getQs: ()=> dispatch(handleGetQuestions()),
  stoptheRedirect: () => dispatch(stopRedirect()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);