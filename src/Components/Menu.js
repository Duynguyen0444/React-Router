import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'About',
    to: '/about',
    exact: false
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: false
  },
  {
    name: 'Product',
    to: '/products',
    exact: false
  },
  {
    name: 'Login',
    to: '/login',
    exact: false
  }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) =>{
    return(
      <Route path={to} exact={activeOnlyWhenExact} children={({match}) =>{
        var active = match ? 'active' : '';
        return(
          // Nếu trùng khớp url thì className là active
          <li className={`my-li ${active}`}> 
            <Link to={to} className="my-link">{label}</Link>
          </li> 
        );
      }} />
    );
  }
class Menu extends Component {
  // ---------------------------FUNCTION---------------------------
  showMenu = (menus) =>{
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu, index) =>{             
        return(
          <MenuLink 
            key={index} 
            label={menu.name}   
            to={menu.to} 
            activeOnlyWhenExact={menu.exact}/>   
        );
      });
    }
    return result;
  }
  // ---------------------------END FUNCTION---------------------------
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          {this.showMenu(menus)}          
        </ul>
      </nav>
    );
  }
}

export default Menu;