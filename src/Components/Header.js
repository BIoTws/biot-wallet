import React, {Component} from 'react';
import MenuIcon from './menu.svg';
import CloseIcon from './close.svg';
import './Header.css';

class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false,
        };
    }
    ClickMenu = (event)=>{

        if(!this.state.menuIsOpen){
           this.setState({
               menuIsOpen: true
           });
            event.target.setAttribute('src',CloseIcon);
        }else{
            this.setState({
                menuIsOpen: false
            });
            event.target.setAttribute('src',MenuIcon);
        }
    };
    render() {
        return (
            <div>
                <div className="Nav">
                    <div className="wallet">Wallet name</div>
                    <div className="menu">
                        <a className="menu__btn" href="#"><img  src={MenuIcon} onClick={this.ClickMenu}  alt="menu"/></a>
                    </div>
                </div>
                <div className="menu__content">
                    <ul>
                        <li><a href="">LinkLinkLink 1</a></li>
                        <li><a href="">Link 2</a></li>
                        <li><a href="">Link 3</a></li>
                    </ul>
                </div>
            </div>


        );
    }
}

export default Headers;
