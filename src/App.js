import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import UserProfile from './component/UserProfile'

class App extends Component {
  constructor(){
    super();
    this.state = {
      accountBalance : 14568.27,
      currentUser : {
        userName : "Omaru Jawara",
        memberSince : "06/08/20",
      }
    }
  }
  render(){
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} 
                   memberSince={this.state.currentUser.memberSince} />
    );
    return (
      <div className="App">
        <Router >
           <Route exact path="/" render={HomeComponent}/>
           <Route exact path="/UserProfile" render={UserProfileComponent}/>
       </Router>
      </div> 
     );
  }
  
}

export default App;
