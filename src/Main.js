import React, { Component } from 'react';
import Headers from './Components/Header';
import Balance from './Components/Balance';
import Navigation from './Components/Navigation';
import Transactions from './Components/Transactions';
class Main extends Component {
    render() {
        return (
            <div>
                <Headers/>
                <Balance/>
                <Navigation/>
                <Transactions/>
            </div>
        );
    }
}

export default Main;
