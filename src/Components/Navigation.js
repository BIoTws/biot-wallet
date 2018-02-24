import React, { Component } from 'react';
import './Navigation.css';
class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <a className="btn" href="#">Receive</a>
                <a className="btn" href="#">Send</a>
            </div>
        );
    }
}

export default Navigation;
