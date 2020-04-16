import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/auth-action';
import logo from './../../dist/images/react-logo.png';
import './header.scss';


const Header = () => {
    const dispatch = useDispatch();

    return (
        <header data-testid="header" className="flex-between">
            <div className="logo flex-center flex-column">
                <img width="25" src={logo} alt="React" />
                <span className="white bold">Admin</span>
            </div>
            <a data-testid="link-logout" className="logout flex-vertical-center" onClick={() => { dispatch(logout()) }} href='/'>
                <span className="bold">Logout</span>
            </a>
        </header>
    );
};

export default Header;
