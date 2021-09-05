
import './App.css';
import React from 'react';
import axios from 'axios';
import User from './components/User';

class App extends React.Component {

  state = {
    user: [],
    userFollowers: [],
  }

componentDidMount(){
    axios
    .get('https://api.github.com/users/jthernandez999')
    .then(res => {
      console.log(res.data);
      this.setState({
        ...this.state,
        user: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
    axios
  .get('https://api.github.com/users/jthernandez999/followers')
  .then(res => {
    console.log('from followers', res.data);
    this.setState({
      ...this.state,
      followers: res.data
    })
  })
  .catch(err => {
    console.log(err)
  })

}

  render() {
    return (
      <div className='App'>
        <h1 className='title'>Github User Cards</h1>
        <User user={this.state.user}
        followers={this.state.followers}
        key={this.state.user.id}
        />
      </div>
    )
  }
}

export default App;


// name={this.state.users.name}
// username={this.state.users.login}
// avatar_url={this.state.users.avatar_url}