import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Bars = styled(FaBars)`
  display: none;
  color: white;
  height: auto;
  width: 2rem;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0px;
    font-size: 1.8rem;
    cursor: pointer;
    transform: translate(-100%, 110%);
  }
`;

export const Nav = styled.nav`
  background-color: black;
  display: flex;
  color: #c9c9c2;
  align-items: center;
  justify-content: space-between;
  border: 2px solid rgba(255, 0, 0, 0.356);
  //what is this?
  padding: 0.5rem, calc((100vw -1000px) / 2);
  z-index: 10;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  padding: 2rem 1rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  color: white;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-right: 0.6rem;
  border-bottom: 1px solid red;
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &.active {
    color: red;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    color: red;
    background-color: rgb(34, 33, 33);
  }
`;
export const NavLinklogo = styled(NavLink)`
  border: none;
`;
