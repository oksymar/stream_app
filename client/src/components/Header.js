import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import headerIcon from './../images/headerIcon.png';
import './mainCSS.css';

class Header extends React.Component {
    state = {
        message: ''
    };

    onFormSubmit = e => {
        e.preventDefault();
    };

    handleMessageChange = e => {
        this.setState({
            message: e.target.value
        });
    };

    render() {
        return (
            <div className="ui stackable secondary mini menu" style={{backgroundColor: '#333333'}}>
                <div className="menu">
                    <Link to="/" className="item">
                        <img src={headerIcon} alt="icon" className="ui centered image"/>
                    </Link>
                </div>
                <div className="item" style={{margin: 'auto'}}>
                    <form className="ui focus inverted input icon" onSubmit={this.onFormSubmit}>
                        <input type="text"
                               placeholder="Wyszukaj"
                               value={this.state.message}
                               onChange={this.handleMessageChange}
                               className="input-placeholder"
                               style={{
                                   color: '#333333',
                                   backgroundColor: '#ff0000',
                                   fontSize: '13px',
                                   fontFamily: 'Arial'
                               }}/>
                        <i aria-hidden="true" className="large search icon"
                           style={{color: '#333333', opacity: '1'}}/>
                    </form>
                </div>
                <div className="ui stackable mini menu" style={{backgroundColor: '#333333'}}>
                    <Link to="#" className="item icon">
                        <i aria-hidden="true"
                           className="header-icon film icon">
                            <span className="header-icon-span">Film</span></i>
                    </Link>
                    <Link to="/streams/new" className="horizontally fitted item icon">
                        <i aria-hidden="true"
                           className="header-icon video camera icon">
                            <span className="header-icon-span">Live</span></i>
                    </Link>
                    <Link to="#" className="item icon">
                        <i aria-hidden="true"
                           className="header-icon user circle icon">
                            <span className="header-icon-span">Wyloguj</span></i>
                    </Link>
                    <GoogleAuth/>
                </div>
            </div>
        );
    }
}

export default Header;