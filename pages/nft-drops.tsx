import {  CardBody } from "reactstrap"
import ShopListing from "../src/components/apps/ecommerce/ShopListing"
import NFTCarousel from '../src/components/carousel/NFTCarousel';
import { API } from "@aws-amplify/api";

import LoadingSpin from "react-loading-spin"


import Image from "next/image"

import  { Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import IDropData from "./types/IDropData";

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

      

      {(dropLoading === true || featureLoading === true) && (
        <div>
          <LoadingSpin primaryColor="#27E73B" />    
        </div>
      )}

      <span style={{ margin: "1em" }} className="font-semibold text-3xl sm:text-4xl md:text-3xl text-gray ">
        Featured Drops
      </span>

      {image !== undefined && (
      <div style={{backgroundColor:"#D69859", height:"500px"}}>
        <Image src={image} width={700} height={300} layout="responsive" />
        <p style={{fontSize:"2em", color:"white", fontWeight:"2em", lineHeight:"1em", marginLeft:"0.5em"}}>HappyAlone</p>
        <p style={{fontSize:"2em", color:"white", fontWeight:"2em", lineHeight:"1em", marginLeft:"0.5em"}}>Co-Own the New Single &apos;Titletrack&apos;</p>
        <p style={{fontSize:"2em", color:"white", fontWeight:"2em", lineHeight:"1em", marginLeft:"0.5em"}}>29th July 14:00 GMT</p>
      </div>
      )}

        {/* <NFTCarousel /> */}

        {dropData !== undefined ? dropData.map((uri: IDropData, index: number) => (
          <CardBody key={index}>
          <ShopListing uri={uri} />
          </CardBody>
        )):(<></>)}
      
      </>
  )
}

