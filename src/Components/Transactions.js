import React, { Component } from 'react';
import Transaction from './Transaction';
import './Transactions.css';
class Transactions extends Component {
    
    render() {
        return (
            <div className="Transactions">
                <Transaction operation="increase" value="30.00" date="06.08.2018"/>
                <Transaction operation="increase" value="120.00" date="12.09.2018"/>
                <Transaction operation="decrease" value="75.00" date="24.12.2018"/>
            </div>
        );
    }
}

export default Transactions;
