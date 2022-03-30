import React from "react";
import Link from "next/link";
import Image from "next/image";
import UserContext from '../../../lib/userContext'

import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import LogoWhite from "../../assets/images/logos/icon.svg";
import user1 from "../../assets/images/users/user1.jpg";
import { signInButtonContent } from "aws-amplify";


import { Auth } from 'aws-amplify';



async function signOut() {
  try {
      UserContext.username = null
      UserContext.password = null
      await Auth.signOut();

  } catch (error) {
      console.log('error signing out: ', error);
  }
}


const Header = ({showMobmenu }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="palette-gray" dark expand="md">
      <div className="d-flex align-items-center">
        <Button color="dark" className="d-lg-none" onClick={showMobmenu}>
          <i className="bi bi-list"></i>
        </Button>

        <Link href="/nft-drops">
          <NavbarBrand className="d-lg-none">
          <div
          style={{
            marginLeft:"1em",
            display: "flex",
            justifyContent: "center",
            cursor:"pointer"
          }}
          >
            <Image width={40} height={40} src={LogoWhite} alt="logo" />
          </div>
          </NavbarBrand>
        </Link>
        
      </div>
      <div className="hstack gap-2">

      </div>

      {/* <Collapse navbar isOpen={isOpen}> */}


{/*         <Nav className="me-auto" navbar>
           <NavItem>
            <Link href="/">
              <a className="nav-link">Starter</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              DD Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav> */}
        
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="customcolor">
            <div style={{ lineHeight: "0px" }}>
              <Image
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="30"
                height="30"
              />
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <Link href='/profile'>
              <DropdownItem>My Account</DropdownItem>
            </Link>
            <DropdownItem divider />
            <Link href="/contact">
              <DropdownItem>Contact Support</DropdownItem>
            </Link>
            <Link key="Logout" href="/">
              <DropdownItem onClick={() => signOut()}>Logout</DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      {/* </Collapse> */}
    </Navbar>
  );
};

export default Header;
