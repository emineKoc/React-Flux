
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/profile'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { // initial state values
      userName:'emineKoc',
      userData:[],
      userRepos:[],
      perPage:5
    }
  }
  // get user data from github
  getUserData(){
    $.ajax({
      url:`https://api.github.com/users/${this.state.userName}?client_id=${this.props.clientId}&cliend_Secret=${this.props.clientSecret}`,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData:data})
        console.log(data)
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({userName:null})
        alert(err);
      }.bind(this)
    })
  }

  componentDidMount(){
    this.getUserData();
  }

  render() {
    return (
      <div className="container">
      <Profile userData = {this.state.userData} />
      </div>
    );
  }
}

// things that never change, default properties
App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}

App.defaultProps = {
  clientId: 'd8d1a2a2e3ca9b5f474d',
  clientSecret: '20ae53391cd32a58320094abbf9b9376c4936859'
}
