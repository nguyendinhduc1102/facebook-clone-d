import { SearchIcon } from '@material-ui/icons';
import React from 'react';
import './Header.css';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/600px-Facebook-icon-1.png"
                alt=""/>
                <div className="header__input">
                    <input type="text" placeholder="Search facebook"/>
                    <SearchIcon />
                </div>
            </div>
            <div className="header__center">

            </div>
            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
