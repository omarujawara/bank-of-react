import React, {Component} from "react";

export default class AccountBalance extends Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    Balance: {this.props.accountBalance}
                </div>
            </React.Fragment>
        )
    }
}