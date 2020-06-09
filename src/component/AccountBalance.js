import React, {Component} from "react";
import axios from 'axios'

export default class AccountBalance extends Component{
    constructor(props){
        super(props);
        this.state = {
            debitBalance : null,
            creditBalance : null,
            balance : null
        }
    }

    componentDidMount(){
        const debitUrl = "https://moj-api.herokuapp.com/debits";
        const creditUrl = "https://moj-api.herokuapp.com/credits";
        axios
        .get(debitUrl)
        .then( data => console.log(data.data))
    }

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