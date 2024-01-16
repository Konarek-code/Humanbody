import { Bars, Nav, NavMenu, NavLink, NavLinklogo } from './NavBarstyle';

import logo from '../../Images/redlogo1.png';
import Popup from '../Popup/Popup';
import '../../App.css';
const Navb = () => {
  return (
    <>
      <Nav>
        <NavLinklogo className="nav-link" to="/">
          <img src={logo} className="logos" alt="zdjecie" />
        </NavLinklogo>
        <Bars />
        <NavMenu>
          <NavLink to="/Bmi " activeStyle>
            Bmi Calculator
          </NavLink>
          <div className="popupcontainer" />
          <NavLink to="/lvlcheck" activeStyle>
            Check your level of advancement
          </NavLink>
          <Popup />
          <div />
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navb;
