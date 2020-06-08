import React, {Component} from 'react';
import AccountBalance from "./AccountBalance";
import {Link} from 'react-router-dom'

class Home extends Component{
    render(){
        return ( 
            <React.Fragment>
                <img src="https://picsum.photos/200" alt="randomPic"/>
                <h1>Bank of React</h1>

                <Link to="/userProfile">User Profile</Link>

                <AccountBalance accountBalance={this.props.accountBalance}/>

            </React.Fragment>
        )
    }
}

export default Home;