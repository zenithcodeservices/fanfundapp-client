import React from "react";
import { Container } from "reactstrap";
import Header from "./header/Header";
import Sidebar from "./sidebars/vertical/Sidebar";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import Nav from '../../components/Nav'
import { Hub, Auth } from 'aws-amplify';
import styles from "./FullLayout.module.css"
import Link from 'next/link'



const FullLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(null)


  React.useEffect(() => {
    let updateUser = async authState => {
      try {
        let user = await Auth.currentAuthenticatedUser()
        setUser(user)
      } catch {
        setUser(null)
      }
    }
    Hub.listen('auth', updateUser) // listen for login/signup events
    updateUser() // check manually the first time because we won't get a Hub event
    return () => Hub.remove('auth', updateUser) // cleanup
  }, []);


  const showMobilemenu = () => {
    setOpen(!open);
  };

  return (
    <>
    {user !== null ? (
    <main>
      <div className="pageWrapper d-md-block d-lg-flex">
        {/******** Sidebar **********/}
        <aside
          className={`sidebarArea shadow bg-gray ${
            !open ? "" : "showSidebar"
          }`}
        >
          <Sidebar showMobilemenu={() => showMobilemenu()} />
        </aside>

        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Header showMobmenu={() => showMobilemenu()} />

          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <div>{children}</div>
          </Container>
        </div>
      </div>
    </main>
    ) : (
      <main>
      <div className={styles['centering-div']}>
        <Link href="/">
          <div className={styles['dialog-box']}>
            <div className={styles['dialog-box-innner']}>
              Restricted Access
            </div>
          </div>
        </Link>
      </div>
      </main>
    )}
    </>
  );
};

export default FullLayout;
