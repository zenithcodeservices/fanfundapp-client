import Head from "next/head";
import { Col, Row } from "reactstrap";
import TopCards from "../src/components/dashboard/TopCards";
import { Card, CardBody } from 'reactstrap';
import styles from '../src/assets/css/portfolio.module.css'


import UserContext from "../lib/userContext"
import { useContext, useEffect, useState } from "react";
import ChampionUri from "../src/types/ChampionUri";
import AvailableNFT from "./availableNFT";



export default function Portfolio() {

  const userContext: any = useContext(UserContext)
  
  const [uris, setUris] = useState([])
  const [walletAddress, setWalletAddress] = useState(undefined)


  useEffect(() => {
    userContext.uriList && setUris(userContext.uriList)
    userContext.address && setWalletAddress(userContext.address)
    console.log("userContext.uriList")
    console.log(userContext.uriList)
    console.log("uris")
    console.log(uris)

  }, [userContext.uriList, userContext.address])


  return (
    <UserContext.Consumer>
      {({web3Provider, uriList,  address, connect, disconnect}: {web3Provider: any, uriList: any, address: any, connect: any, disconnect: any}) => (
        <>
        {web3Provider ? (
          <div className={styles['centering-div']}>
          <div className={styles['dialog-box']}>
            Wallet Connected {address}{'\n'}
          </div>

            {uris.length ? uris.map((uri: ChampionUri, index: number) => (
              <>
                  <AvailableNFT uri={uri} key={index} />
              </>
            )) : (

              <div className={styles['connect-wallet-box-wrapper']}>
              <div className={styles['connect-wallet-content']}>
                <div className={styles['connect-wallet-text']}>
                  <p>There are currently no NFTs in your inventory</p>
                </div>
              </div>
              </div>


            )}
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
