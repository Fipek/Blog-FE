import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../style/HeaderComponent.css';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-default navbar-fixed-top header-body">
              <Link to='/' className="navbar-brand header-logo" ><img src="/asset/code.png" className="img-circle logo-img" alt="logo"/><span style={{"marginLeft":"5px"}}>Kod Dağarcığı</span></Link>
              <div className="header-navbar-area">
                <div className="navbar-header">
                  <div className="toggle-button">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#headerNavbar">
                    <span className="icon-bar header-icon-style"></span>
                    <span className="icon-bar header-icon-style"></span>
                    <span className="icon-bar header-icon-style"></span> 
                  </button>
                  </div>

                </div>
                <div className="collapse navbar-collapse" id="headerNavbar">
                  <ul className="nav navbar-nav navbar-right">        
                    <li><Link to='/'>ANASAYFA</Link></li>
                    <li><Link to='/category'>KATEGORİ</Link></li>
                    <li><Link to='/contact'>YAZAR HAKKINDA</Link></li>
                  </ul>
                </div>
              </div>
            </nav>    
      );
  }
}
export default Header;