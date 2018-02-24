import React, { Component } from 'react';
import './Transaction.css';
class Transaction extends Component {

    render() {
        console.log(this.props.operation);
        if(this.props.operation==="increase") {
            return (
                <div className="Transaction">
                    <div className="increase">{this.props.value} <span>€</span></div>
                    <div className="date">{this.props.date}</div>
                </div>
            );
        } else{
            return (
                <div className="Transaction">
                    <div className="decrease">{this.props.value} <span>€</span></div>
                    <div className="date">{this.props.date}</div>
                </div>
            );
        }


    }
}

export default Transaction;

