import { Button, Nav, NavItem, NavbarBrand } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoWhite from "../../../assets/images/logos/icon.svg";
import Image from "next/image";
import {DropdownItem, Badge} from "reactstrap";


const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "bi bi-speedometer2",
  },

  {
    title: "Alert",
    href: "/ui/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Badges",
    href: "/ui/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Buttons",
    href: "/ui/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Cards",
    href: "/ui/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Grid",
    href: "/ui/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Table",
    href: "/ui/tables",
    icon: "bi bi-layout-split",
  },
  {
    title: "Forms",
    href: "/ui/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Breadcrumbs",
    href: "/ui/breadcrumbs",
    icon: "bi bi-link",
  },
  {
    title: "About",
    href: "/about-dashboard",
    icon: "bi bi-people",
  },
];


const navigation2 = [
  {
    title: "Gallery",
    href: "/nft-drops",
    icon: "bi bi-speedometer2",
  },
/*   {
    title: "Previous Drops",
    href: "/nft-drops-historical",
    icon: "bi bi-bell",
  }, */

  {
    title: "Collection",
    href: "/portfolio",
    icon: "bi bi-patch-check",
  },
  {
    title: "News",
    href: "/news",
    icon: "bi bi-bell",
  },
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div style={{backgroundColor: '#2b2b2b'}} className="p-3">
        <div className="d-flex align-items-center">
          <Link style={{}} href="/nft-drops">
            <NavbarBrand>
              <div
              style={{
                display: "flex",
                justifyContent: "center",
                cursor:"pointer"

              }}
              >
 
              <Image width={40} height={40} src={LogoWhite} alt="logo"></Image>

              
              </div>
            </NavbarBrand>
            
          </Link>

          <span style={{position:"relative", left:"-10px"}} className="font-semibold text-3xl sm:text-4xl md:text-3xl text-white ">Fanfund</span>
            <Button
              style={{filter: "invert(1)"}}
              close
              size="lg"
              className="text-white ms-auto d-lg-none"
              onClick={showMobilemenu}
            ></Button>


        </div>

        
      <div className="pt-4 mt-2">
        <Nav  vertical className="sidebarNav">

          {navigation2.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className="nav-link text-secondary py-3"
                >
                  <i className={navi.icon}></i>
                  <span className="text-white ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
          <DropdownItem divider />
          <NavItem key="Marketplace" className="sidenav-bg">
              <Link href="#">
                <a
                  className="nav-link text-secondary py-3"
                >
                  <i className="bi bi-bell"></i>
                  <span className="text-white ms-3 d-inline-block">Marketplace</span>
                  <Badge style={{marginLeft:"1em"}} color="primary" pill>
                    Soon
                  </Badge>
                </a>
              </Link>
            </NavItem>


{/*           <p className="text-muted" tag="h6">Default</p>
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}

          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/ample-react-dashboard/?ref=33"
          >
            Upgrade To Pro
          </Button> */}


            <div style={{position:"relative", top:"60px"}} className="text-sm font-medium py-1 text-white">
              Copyright © {new Date().getFullYear()}{" "}

                Fanfund<br></br><br></br>
                <small className="text-muted">A venture owned by OPUS CREATIVES LTD registered in the UK under the  Registrar of Companies for England and Wales</small>
            </div>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
