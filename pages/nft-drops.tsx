import {  CardBody } from "reactstrap"
import ShopListing from "../src/components/apps/ecommerce/ShopListing"
import NFTCarousel from '../src/components/carousel/NFTCarousel';
import { API } from "@aws-amplify/api";

import Image from "next/image"

import  { Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import IDropData from "./types/IDropData";

Storage.configure({ track: true, level: "public" });

export default function UpcomingNFTDrops() {


  const [image, setImage] = useState(undefined);

  const getFeaturedPics = async () => {
    await Storage.get(`featured-drop@1x.jpg`)
    .then(url => {
      var myRequest = new Request(url);
      fetch(myRequest).then(function(response) {
        if (response.status === 200) {
          setImage(url)
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
        await API.graphql({
            query: listDropsQuery
        }).then(result => {
          const items = result['data']['listDrops']['items']
          console.log("items[0]")
          console.log(items[0])
          setDropData(items)
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

      {image !== undefined && (
      <div style={{backgroundColor:"#D69859", height:"500px"}}>
        <Image src={image} width={700} height={300} layout="responsive" />
        <p style={{fontSize:"2em", color:"white", fontWeight:"2em", lineHeight:"1em", marginLeft:"0.5em"}}>HappyAlone</p>
        <p style={{fontSize:"2em", color:"white", fontWeight:"2em", lineHeight:"1em", marginLeft:"0.5em"}}>Co-Own the New Single "Titletrack"</p>
        <p style={{fontSize:"2em", color:"white", fontWeight:"2em", lineHeight:"1em", marginLeft:"0.5em"}}>29th July 14:00 GMT</p>
      </div>
      )}

        {/* <NFTCarousel /> */}

        {dropData !== undefined ? dropData.map((uri: IDropData, index: number) => (
          <CardBody>
          <ShopListing uri={uri} key={index} />
          </CardBody>
        )):(<></>)}
      
      </>
  )
}

