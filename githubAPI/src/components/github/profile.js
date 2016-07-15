import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Profile extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-sm-2 col-md-2">
                <img src={this.props.userData.avatar_url}
                alt="" className="img-rounded img-responsive" />
            </div>
            <div className="col-sm-10 col-md-10">
                <blockquote>
                  <div className="panel panel-default">
                  <div className="panel-body">
                  <div className="row">
                      <span className="label label-primary">{this.props.userData.public_repos} Repos </span>
                      <span className="label label-success">{this.props.userData.public_gists} Gists </span>
                      <span className="label label-danger">{this.props.userData.public_followers} Followers </span>
                      <span className="label label-info">{this.props.userData.public_following} Following </span>
                  </div>
                  <hr />
                  <div className="row">
                      <div className="list-group">
                        <li className="list-group-item"><strong>UserName:</strong> {this.props.userData.login}</li>
                        <li className="list-group-item"><strong>Location:</strong> {this.props.userData.location}</li>
                        <li className="list-group-item"><strong>Email:</strong> {this.props.userData.email}</li>
                        <li className="list-group-item">
                        <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}> Visit Profile </a></li>
                    </div>
                  </div>
                  </div>
                  </div>
                </blockquote>
                </div>
        </div>
    </div>
    );
  }
}
