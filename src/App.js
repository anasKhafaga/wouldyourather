import { Component } from 'react';
import { connect} from 'react-redux';
import './App.scss';
import { NavBar } from './Components';
import { Home, LeaderBoard, NewQuestion} from './Pages'
import { Route} from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add">
          <NewQuestion />
        </Route>
        <Route path="/leaderboard">
          <LeaderBoard />
        </Route> */}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {

  }
}

export default connect()(App);
