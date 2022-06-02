import Head from "next/head";
import { Col, Row } from "reactstrap";
import TopCards from "../src/components/dashboard/TopCards";
import { Card, CardBody } from 'reactstrap';
import styles from '../src/assets/css/AvailableNFT.module.css'
import Image from "next/image"

import UserContext from "../lib/userContext"
import { useContext, useEffect, useState } from "react";
import ChampionUri from "../src/types/ChampionUri";
import LoadingSpin from "react-loading-spin";
import Link from "next/link";

const DEFAULT_WALLET_ADDRESS: string = 'Input wallet address...'


export default function AvailableNFT(data: any) {

  const [walletAddress, setWalletAddress] = useState(DEFAULT_WALLET_ADDRESS)

  const userContext: any = useContext(UserContext)
  
  let uri: ChampionUri = data.uri

  let image: string = uri.image.split('://')[1]
  image = `https://blockapescissors.mypinata.cloud/ipfs/${image}`
  
    function onChangeWalletAddress (event: any): void {
      setWalletAddress(event.target.value)
    }
    
    function onFocus (event: any): void {
      if (event.target.value !== DEFAULT_WALLET_ADDRESS) {
        return
      }
    
      setWalletAddress('')
    }
    
    function onBlur (event: any): void {
      if (event.target.value !== '') {
        return
      }
    
      setWalletAddress(DEFAULT_WALLET_ADDRESS)
    }




    return (

          <>
          
      
      <div className={`${styles['wrapperDiv']} mt-4 p-4 col-sm-12 col-md-6 col-lg-5 col-xl-4`}>
          <Row>
            <Col>
              <div style={{ cursor: "pointer" }}>
                {/* <Link
                  href={{
                    pathname: "/NFTs/nft-detail?drop=[id]",
                    query: {
                      id: uri['id'],
                    }
                  }}
                  // as={`/NFTs/nft-detail?id=${uri['id'].substr(uri['id'].length - 5)}`}
                  as={`/NFTs/nft-detail?id=${uri['id']}`}
                > */}
                  <div>
                    <a>
                      <Image
                        src={image}
                        alt="product"
                        className="img-fluid rounded-3"
                        height={200}
                        width={200}
                        layout="responsive" />
                    </a>
                  </div>
                {/* </Link> */}
              </div>
              <div className="pt-2">
                <div className="mb-4"></div>
                <ul className={styles.nostyle}>
                  <li><span className={styles.titleTextSpan}>ID: {`\t`}</span><span className={styles.titleTextSpanYellow}>{uri['id']}</span></li>
                  <li><span className={styles.titleTextSpan}>{uri['attributes'][0]['trait_type'].split(' ').slice(0, 1).join(' ')}: {`\t`}</span><span className={styles.titleTextSpanYellow}>{uri['attributes'][0]['value'].split(' ').slice(0, 2).join(' ')}</span></li>
                  <li><span className={styles.titleTextSpan}>{uri['attributes'][1]['trait_type'].split(' ').slice(0, 1).join(' ')}: {`\t`}</span><span className={styles.titleTextSpanYellow}>{uri['attributes'][1]['value'].split(' ').slice(0, 2).join(' ')}</span></li>
                  <li><span className={styles.titleTextSpan}>{uri['attributes'][2]['trait_type'].split(' ').slice(0, 1).join(' ')}: {`\t`}</span><span className={styles.titleTextSpanYellow}>{uri['attributes'][2]['value'].split(' ').slice(0, 2).join(' ')}</span></li>
                  <li><span className={styles.titleTextSpan}>{uri['attributes'][3]['trait_type'].split(' ').slice(0, 1).join(' ')}: {`\t`}</span><span className={styles.titleTextSpanYellow}>{uri['attributes'][3]['value'].split(' ').slice(0, 2).join(' ')}</span></li>
                  <li><span className={styles.titleTextSpan}>{uri['attributes'][4]['trait_type'].split(' ').slice(0, 1).join(' ')}: {`\t`}</span><span className={styles.titleTextSpanYellow}>{uri['attributes'][4]['value'].split(' ').slice(0, 2).join(' ')}</span></li>
                  <li><span className={styles.titleTextSpan}>{uri['attributes'][5]['trait_type'].split(' ').slice(0, 1).join(' ')}: {`\t`}</span><span className={styles.titleTextSpanYellow}>{uri['attributes'][5]['value'].split(' ').slice(0, 2).join(' ')}</span></li>
                  <li><span className={styles.titleTextSpan}>{uri['attributes'][6]['trait_type'].split(' ').slice(0, 1).join(' ')}: {`\t`}</span><span className={styles.titleTextSpanYellow}>{uri['attributes'][6]['value'].split(' ').slice(0, 2).join(' ')}</span></li>
                  <li><span className={styles.titleTextSpan}>{uri['attributes'][7]['trait_type'].split(' ').slice(0, 1).join(' ')}: {`\t`}</span><span className={styles.titleTextSpanYellow}>{uri['attributes'][7]['value'].toString().slice(0, 6)}</span></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        
        
        </>


    )
}
