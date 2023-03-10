import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import classes from './Navbar.module.css';

const Navbar = () => {

  const {setIsAuth} = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className={classes.navbar}>
      <MyButton onClick={logout}>
        Выйти
      </MyButton>
      <div className={classes.navbar__links}>
        <Link className={classes.navbar__link} to="/about"> О сайте</Link>
        <Link className={classes.navbar__link} to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;
