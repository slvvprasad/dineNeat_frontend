import { Component} from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Logo from '../assets/dnehor.png';
import Button from '@mui/material/Button';


class Navbar extends Component {
  // Set state
  // Make Handleclick Function
  state = {clicked: false};
  handleClick =() =>{
      this.setState({ clicked: !this.state.clicked})
  }
  render() {
    
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo"><Link to="/">
    <img src={Logo} alt="" Link to="/"/> 
    {/* <h1>THE FOOD DELIGHT</h1> */}
    </Link></div>
        <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu" }>
            {MenuItems.map((item,index)=> {
                return(
            <li key={index}> 
          <Link className={item.cName}
          to={item.url}>
          <i className={item.icon}></i>{item.title}</Link>
          </li>
                )
            })}
            {/* <Link to="login"> */}
          <Button href='/login' className="navbarbutton">Signin</Button>
          {/* </Link> */}
          </ul>
      </nav>
    );
  }
}

export default Navbar;
