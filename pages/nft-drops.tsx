import {  CardBody } from "reactstrap"
import ShopListing from "../src/components/apps/ecommerce/ShopListing"
import NFTCarousel from '../src/components/carousel/NFTCarousel';
import { API } from "@aws-amplify/api";

import LoadingSpin from "react-loading-spin"

import styles from "../styles/NFTDrops.module.css"

import Image from "next/image"

import  { Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import IDropData from "../src/types/IDropData";
import Link from "next/link";

Storage.configure({ track: true, level: "public" });

export default function UpcomingNFTDrops() {


  const [image, setImage] = useState(undefined);
  const [featureLoading, setFeatureLoading] = useState(false);
  const [dropLoading, setDropLoading] = useState(false);

  const getFeaturedPics = async () => {
    setFeatureLoading(true)
    await Storage.get(`featured-drop@1x.jpg`)
    .then(url => {
      var myRequest = new Request(url);
      fetch(myRequest).then(function(response) {
        if (response.status === 200) {
          setImage(url)
          setFeatureLoading(false)
        }
      });
    })
    .catch(err => console.log(err));
  };


  const [dropData, setDropData] = useState(undefined);


  useEffect(() => {
    getFeaturedPics()
    fetchDropInfo();
  }, [])





  const listDropsQuery = /* GraphQL */ `
  query ListDropsQuery {
    listDrops {
      items {
        artistID
        dropDateTime
        isSoldOut
        createdAt
        description
        id
        postcontent
        streamingPercentage
        title
        updatedAt
        artist {
          name
        }
      }
    }
  }
  `

  const fetchDropInfo = async () => {
    try {
        setDropLoading(true)
        await API.graphql({
            query: listDropsQuery
        }).then(result => {
          const items = result['data']['listDrops']['items']
          console.log("items[0]")
          console.log(items[0])
          setDropData(items)
          setDropLoading(false)
          console.log(dropData)
        })
        
    } catch (err) {
        console.log(err);
    }
  }


  return (

      <>


      <span style={{ margin: "1em" }} className="font-semibold text-3xl sm:text-4xl md:text-3xl text-gray ">
        Featured Drops
      </span>

        <div className={styles.overlayImage} style={{ width: "100%", height: "600px", position: "relative", borderRadius:"20px" }}>
          {(dropLoading === true || featureLoading === true) && (
          <div style={{display:"flex", justifyContent:"center",height: "600px", alignItems:"center"}}>
              <div>
                <LoadingSpin primaryColor="#27E73B" />
              </div>
          </div>
          )}
          {(image !== undefined && dropData !== undefined) && (
          <Link
            href={{
              pathname: "/NFTs/nft-detail?drop=[id]",
              query: {
                id: dropData['id'],
              }
            }}
            // as={`/NFTs/nft-detail?id=${dropData['id']}`}
            as={`/NFTs/nft-detail?id=8a2bc444-c9cf-45f8-98dc-0f500e465684`}
          >
            <Image className={styles.bordered} src={image} width="100vw" height="100%" layout="fill" objectFit="cover" />
          </Link>
          )}
        </div>
        
        <p style={{width:"1px", whiteSpace:"nowrap", position: "relative", marginBottom:"-35px", left:"10px", top:"-165px", fontSize: "2em", color: "white", fontWeight: "2em", lineHeight: "1em", marginLeft: "0.5em" }}>HappyAlone</p>
        <p style={{width:"1px", whiteSpace:"nowrap", position: "relative", marginBottom:"-35px", left:"10px", top:"-110px", fontSize: "2em", color: "white", fontWeight: "2em", lineHeight: "1em", marginLeft: "0.5em" }}>New Single &apos;Titletrack&apos;</p>
        <p style={{width:"1px", whiteSpace:"nowrap", position: "relative", marginBottom:"-35px", left:"10px", top:"-55px", fontSize: "2em", color: "white", fontWeight: "2em", lineHeight: "1em", marginLeft: "0.5em" }}>29th July 14:00 GMT</p>

        {/* <NFTCarousel /> */}

        {dropData !== undefined ? dropData.map((uri: IDropData, index: number) => (
          <>
            <CardBody>
            <ShopListing uri={uri} key={index}/>
            </CardBody>
          </>
        )):(<></>)}
      
      </>
  )
}

