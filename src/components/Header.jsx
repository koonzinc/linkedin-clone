import React from 'react';
import './style/Header.css';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">

            </div>
        </div>
    )
}

export default Header