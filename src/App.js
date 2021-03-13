import { Component, Fragment } from 'react';
import { connect} from 'react-redux';
import './App.scss';
import { NavBar } from './Components';
import { Home, LeaderBoard, Login, NewQuestion, Question, NotFound } from './Pages';
import { Route, withRouter, BrowserRouter as Router, Switch} from 'react-router-dom'

class App extends Component {
  
  render() {

    
    
    return (
      <div className="App">
        <NavBar />
        {this.props.user ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/questions/:question_id" component={Question} />
            <Route component={NotFound} />
          </Switch>
        ) : (
          <Login />
        )}

      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.authUser
})

export default withRouter(connect(mapStateToProps)(App));
