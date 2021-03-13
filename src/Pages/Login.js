import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleGetUsers, userLogin} from '../Store/actions/auth'

class Login extends Component {
  state = {
    userId: '--',
  };

  handleChange = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.userId === '--') {
      return;
    }
    this.props.login(this.props.users[this.state.userId]);
  };

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const users = [];
    for (let user in this.props.users) {
      users.push(this.props.users[user]);
    }
    return (
      <div>
        <form>
          <select onChange={this.handleChange} defaultValue="--">
            <option value="--" key="1">
              --
            </option>
            {users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(handleGetUsers()),
  login: (user)=> dispatch(userLogin(user))
});
const mapStateToProps = ({ users }) => ({
  users
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
