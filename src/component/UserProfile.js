import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class UserProfile extends Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <h1>User Profile</h1>

                    <div>User: {this.props.userName}</div>
                    <div>Member Since: {this.props.memberSince}</div>
                    <Link to="/">Home</Link>
                </div>
            </React.Fragment>
        )
    }
}