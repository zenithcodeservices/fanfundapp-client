import React from "react"
import Link from "next/link";
import Image from "next/image";
import UserContext from '../../../lib/userContext'

import ConnectButton from '../../components/connectButton'

import {
  Navbar,
  Collapse,
  Nav,
  Badge,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Toast,
  ToastBody,
  ToastHeader,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import LogoWhite from "../../assets/images/logos/icon.svg";
import user1 from "../../assets/images/users/user1.jpg";
import { signInButtonContent } from "aws-amplify";


import { Auth } from 'aws-amplify';

import styles from "./Header.module.css"



async function signOut() {
  try {
      UserContext.username = null
      UserContext.password = null
      UserContext.img = ''
      await Auth.signOut();

  } catch (error) {
      console.log('error signing out: ', error);
  }
}



const Header = ({showMobmenu }) => {


  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [dropdownOpen2, setDropdownOpen2] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };


  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    getCognitoUserInfo();
  }, []);


  const getCognitoUserInfo = async () => {
    await Auth.currentAuthenticatedUser().then(user => {
      setUser(user)
    })
  };



  return (
    <UserContext.Consumer>
      {({web3Provider, uriList, userNFTs, address, connect, disconnect}: {web3Provider: any, uriList: any, userNFTs: any, address: any, connect: any, disconnect: any}) => (

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
      <div className="hstack gap-2"></div>

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

        <div className="d-flex align-items-center">
        <Badge style={{fontWeight:"500", marginRight:"1em"}} color="secondary" pill>
        Pre-Alpha
          </Badge>
          <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
            <DropdownToggle className={styles["wallet-toggle"]} color="gray">
              <div style={{ lineHeight: "0px" }}>
                <i style={{filter: "invert(1)", fontSize:"30px"}} className="bi bi-wallet2 fa-10x"></i>
              </div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Crypto Wallets</DropdownItem>
              <DropdownItem divider />
              <DropdownItem style={{filter: "grayscale(1)"}}><ConnectButton /></DropdownItem>
              {user ? (<DropdownItem style={{margin: "0"}} header>Primary:<br></br> {user.attributes['custom:custom:primaryAddy'] !== undefined ? (user.attributes['custom:custom:primaryAddy'].slice(0, 8) + "..." + user.attributes['custom:custom:primaryAddy'].slice(35)) : ""}</DropdownItem>):(<span>undefined</span>)}
              {user ? (<DropdownItem style={{margin: "0"}} header>Secondary:<br></br> {user.attributes['custom:custom:secondaryAddy'] !== undefined ? (user.attributes['custom:custom:secondaryAddy'].slice(0, 8) + "..." + user.attributes['custom:custom:secondaryAddy'].slice(35)) : ""}</DropdownItem>):(<span>undefined</span>)}
              <DropdownItem divider />
              <DropdownItem header>Fanfund Wallet</DropdownItem>
              
            </DropdownMenu>
          </Dropdown>
          
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="customcolor">
              <div style={{ lineHeight: "0px" }}>
                  <Image
                  src={UserContext.img ? UserContext.img : user1}
                  alt="profile"
                  className="rounded-circle"
                  width="30"
                  height="30"
                />
              </div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Info</DropdownItem>
              {/* <DropdownItem header>Hello {UserContext.attributes["name"] ? UserContext.attributes["name"] : "" }</DropdownItem> */}
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
        </div>



      {/* </Collapse> */}
    </Navbar>
    )}
    </UserContext.Consumer>
  );
};

export default Header;
