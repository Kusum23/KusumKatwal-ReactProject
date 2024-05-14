import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../assests/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { Input } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Search } = Input;

const Navbar = ({ setShowLogin, setSearchTerm }) => {
  const [menu, setMenu] = useState('menu');
  const { getTotalcartAmount } = useContext(StoreContext);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>
          home
        </Link>
        <a href="#explore-menu" onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>
          menu
        </a>
        <a href="#app-download" onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>
          mobile-app
        </a>
        <a href="#footer" onClick={() => setMenu('contact us')} className={menu === 'contact us' ? 'active' : ''}>
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <Search
          placeholder="Search..."
          allowClear
          enterButton
          onSearch={handleSearchChange}
          className="search-input"
        />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <ShoppingCartOutlined />
          </Link>
          <div className={getTotalcartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
