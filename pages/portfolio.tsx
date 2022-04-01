import Head from "next/head";
import { Col, Row } from "reactstrap";
import TopCards from "../src/components/dashboard/TopCards";
import { Card, CardBody } from 'reactstrap';
import styles from '../src/assets/css/portfolio.module.css'


import UserContext from "../lib/userContext"



export default function Portfolio() {
  return (
    <UserContext.Consumer>
      {({web3Provider, address, connect, disconnect}: {web3Provider: any, address: any, connect: any, disconnect: any}) => (
        <>
        {web3Provider ? (
          <div className={styles['centering-div']}>
          <div className={styles['dialog-box']}>
            Wallet Connected {address}
          </div>
          </div>
        ):(
          <div className={styles['centering-div']}>
          <div className={styles['dialog-box']}>
            Please Connect
          </div>
          </div>

        )}
      </>
      )}

    </UserContext.Consumer>
      

  );
}
