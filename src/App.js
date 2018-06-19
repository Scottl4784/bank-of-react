import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn'
import Debits from './components/Debits';
import Credits from './components/Credits';
class App extends Component {
  state = {
    currentUser: {
      userName: 'Timothy Bojangles',
      memberSince: 'Aug. 8'
    },
    creditsState: [],
    debitsState: [],
  }
  getTotal = () => {
    const totalDebits = this.state.debitsState.reduce((a, b) => {
      return a + b.amount
    }, 0)
    const totalCredits = this.state.creditsState.reduce((a, b) => {
      return a + b.amount
    }, 0)
    return '$' + (totalCredits - totalDebits).toFixed(2)
  }
  
  getCredits = () => {
    axios.get('http://localhost:4000/credits').then((res) => {
      console.log(res.data);
      this.setState({ creditsState: res.data })
    })
  }
  getDebits = () => {
    axios.get('http://localhost:4000/debits').then((res) => {
      console.log(res.data);
      this.setState({ debitsState: res.data })
    })
  }
  componentDidMount() {
    this.getCredits()
    this.getDebits()
  }
  updateUserInformation = (newUser) => {
    // take state
    // change state
    // set state
    const tempUser = { ...this.state.currentUser }
    tempUser.userName = newUser.userName
    this.setState({ currentUser: tempUser })
  }
  render() {
    const balance = this.getTotal()
    const HomeComponent = () => {
      return <Home balance={balance} />
    }
    const UserProfileComponent = () => {
      return <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince} />
    }
    const LogInComponent = (props) => {
      return <LogIn updateUserInformation={this.updateUserInformation} {...props} />
    }
    const DebitsComponent = () => {
      return <Debits debitsState={this.state.debitsState} balance={balance}/>
    }
    const CreditsComponent = () => {
      return <Credits creditsState={this.state.creditsState} balance={balance}/>
    }
    return (
      <Router>
        <Switch>
          <Route exact path="/debits" render={DebitsComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path='/userProfile' render={UserProfileComponent} />
          <Route exact path="/" render={HomeComponent} />
        </Switch>
      </Router>
    )
  }
}
export default App;