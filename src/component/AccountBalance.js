import React, {Component} from "react";
import axios from 'axios'


export default class AccountBalance extends Component{
    constructor(props){
        super(props);
        this.state = {
            debitBalance : [],
            creditBalance : [],
        }
    }

    componentDidMount(){
        const debitUrl = "https://moj-api.herokuapp.com/debits";
        const creditUrl = "https://moj-api.herokuapp.com/credits";
        axios
        .get(debitUrl)
        .then(data => data.data)
        .then(data => {
            const debitBalance = data;
            this.setState({debitBalance});
            console.log(this.state.debitBalance)
        }).catch(error => console.log(error));

        axios
        .get(creditUrl)
        .then( data => data.data)
        .then(data => {
            const creditBalance = data;
            this.setState({creditBalance});
            console.log(this.state.creditBalance);
        }).catch(error => console.log(error))

        
    }

    calculateBalance = () =>{
        const debit = this.state.debitBalance.reduce( (acc,curr) => acc + curr.amount,0);
        const credit = this.state.creditBalance.reduce( (acc,curr) => acc + curr.amount,0);
        const balance = Math.abs(debit - credit);
        return balance;
    }

    

    render(){
        const balance = this.calculateBalance()
        return(
            <React.Fragment>
                <div>
                    {/* {(this.calculateBalance()).toFixed(2)} */}
                    Balance: {balance.toFixed(2)}
                    
                </div>
            </React.Fragment>
        )
    }
}