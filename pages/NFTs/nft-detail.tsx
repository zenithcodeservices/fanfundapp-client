import styles from '../../src/assets/css/nft-detail.module.css'
import { API } from "@aws-amplify/api";

import React, { useEffect, useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  Carousel,
  CarouselItem,
  CarouselControl,
  DropdownItem,
  Badge,
  Label,
  FormGroup,
  Button,
  Input,
} from "reactstrap"
import BreadCrumbs from "../../src/layouts/BreadCrumbs"

import img1 from "../../src/assets/images/bg/bg1-square.png";

/* import img1 from "../../src/assets/images/products/s1.jpg"
import img2 from "../../src/assets/images/products/s2.jpg"
import img3 from "../../src/assets/images/products/s3.jpg" */

import Image from "next/image"
import router, { useRouter } from 'next/router';
import Link from 'next/link';

/* const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
] */

export default function NFTDetail(data: any) {

  const [dropData, setDropData] = useState(undefined);
  const [tierData, setTierData] = useState(undefined);
  const [dropID, setDropID] = useState(undefined);

  const router = useRouter();




  const listDropsQuery = /* GraphQL */ `
  query getDropByID ($dropID: ID!) {
  getDrop(id: $dropID) {
    artistID
    createdAt
    description
    dropDateTime
    id
    isSoldOut
    postcontent
    streamingPercentage
    title
    updatedAt
    artist {
      name
    }
  }
}
  `

const listTiersQuery = /* GraphQL */ `
query listTiersForTitleTrackDrop  ($dropID: ID!) {
  listTiers(filter: {dropID: {eq: $dropID}}) {
    items {
      id
      isSoldOut
      numberOfTokens
      percentageOwnership
      perkDescription
      priceUSD
      title
      updatedAt
      drop {
        updatedAt
        title
        streamingPercentage
        postcontent
        isSoldOut
        id
        dropDateTime
        description
        createdAt
        artist {
          id
          name
        }
      }
    }
  }
}
`



  const fetchDropInfo = async () => {
    try {
        await (API.graphql({
            query: listDropsQuery,
            variables: {
              dropID: dropID,
            },
        }) as any).then(result => {
          const item = result['data']['getDrop']
          setDropData(item)
          console.log(dropData)
          
        })
        
    } catch (err) {
        console.log(err);
    }
  }

  const fetchTierInfo = async () => {
    try {
        await API.graphql({
            query: listTiersQuery,
            variables: {
              dropID: dropID,
            },
        }).then(result => {
          const item = result['data']['listTiers']['items']
          setTierData(item)
          console.log("tierData")
          console.log(tierData)
        })
        
    } catch (err) {
        console.log(err);
    }
  }

    
  useEffect(() => {
    if(!router.isReady) return;
    
    const dropIDFromURL: string = router.query.id.toString()
    setDropID(dropIDFromURL)

  }, [router.isReady, router.query])

  useEffect(() => {
    fetchDropInfo();
    fetchTierInfo();

  }, [dropID])


  const [activeIndex, setActiveIndex] = React.useState(0)
  const [animating, setAnimating] = React.useState(false)

/*   const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 1 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Image src={item.src} alt={item.altText} className="img-fluid w-100" />
      </CarouselItem>
    )
  }) */

  return (
    <div>


      <div className={styles['nav-box-wrapper']}>
        <div className={styles['nav-content']}>
          <div className={styles['nav-text']}>
            <small><span className={styles['link-hover']}><Link href={`/nft-drops`}>{'< Back'}</Link></span></small>
          </div>
        </div>
      </div>

      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <Row>
                <Col sm="12" md="6" lg="6">
                  <div>
                    <a>
                      <Image
                        src={img1}
                        alt="product"
                        className="img-fluid rounded-3"
                        height={200}
                        width={200}
                        layout="responsive"
                      />
                    </a>
                  </div>
                </Col>
                <Col sm="12" md="6" lg="6">
                  <Badge className="mb-6" color="success">Single</Badge>
                  <h5 className="mt-2 mb-3">{dropData!== undefined ? dropData['artist']['name']:undefined}</h5>
                  <h1 className="mt-2 mb-3">{dropData!== undefined ? dropData['title']:undefined}</h1>
                  <p style={{fontSize:"1.3em"}} className="text-muted py-3">
                  {dropData!== undefined ? dropData['description']:undefined}
                  </p>
                  {/* <h2>$546.00</h2> */}
                  <br />
                  <div className="d-flex">
                    <FormGroup className="me-3">
                      <Label for="exampleSelect">Hoodie Size</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </Input>
                    </FormGroup>
                 {/*    <FormGroup>
                      <Label for="exampleSelect">Qty</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup> */}
                  </div>
                  <br />
                  <h6>Colors</h6>
                  <div className="button-group">
                    <Button color="success" />
                    <Button color="danger" />
                    <Button color="dark" />
                    <Button color="warning" />
                  </div>
                  <br />
                  <br />
              {/*     <Button color="primary" className="me-2">
                    Buy Now
                  </Button>
                  <Button color="dark">Add to Cart</Button> */}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>

        <Col className={`${styles['centeredDiv']} py-sm-4 px-sm-4`} sm="12" md="8" lg="6" xl="4">
          <Card>
            <CardBody>
            <div style={{display:"flex", minHeight:"600px", flexDirection:"column"}}>
                  <div style={{marginBottom: "auto"}}>
                    <Image alt="Card image cap" src={img1}  layout="responsive"></Image>
                    <div style={{position: "relative", zIndex:"+1",top:"-16%", left:"42%"}}>
                      <Badge color="success">{tierData !== undefined ? tierData[1]['title']:undefined}</Badge>
                    </div>
                    <p>{tierData !== undefined ? tierData[1]['priceUSD']:undefined} USD</p>
                    <DropdownItem divider />
                    <p>{tierData !== undefined ? tierData[1]['perkDescription'][0]:undefined}</p>
                  </div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-lg text-gray bg-palette-primary hover:bg-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-2"
                      >
                        Buy Now
                    </button>
                <p>{tierData !== undefined ? tierData[1]['numberOfTokens']:undefined} Token Available</p>
              </div>
              {/* <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-evenly"}}>
              </div> */}
            </CardBody>
          </Card>
        </Col>
        
        <Col className={`${styles['centeredDiv']} py-sm-4 px-sm-4`} sm="12" md="8" lg="6" xl="4">
          <Card>
            <CardBody>
              <div style={{display:"flex", minHeight:"600px", flexDirection:"column"}}>
                  <div style={{marginBottom: "auto"}}>
                    <Image alt="Card image cap" src={img1}  layout="responsive"></Image>
                    <div style={{position: "relative", zIndex:"+1",top:"-16%", left:"42%"}}>
                      <Badge color="success">{tierData !== undefined ? tierData[2]['title']:undefined}</Badge>
                    </div>
                    <p>{tierData !== undefined ? tierData[2]['priceUSD']:undefined} USD</p>
                    <DropdownItem divider />
                    <p>{tierData !== undefined ? tierData[2]['perkDescription'][0]:undefined}</p>
                  </div>
                  <div style={{justifyContent:"flex-end"}}>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-lg text-gray bg-palette-primary hover:bg-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-2"
                      >
                        Buy Now
                    </button>
                  </div>
                <p>{tierData !== undefined ? tierData[2]['numberOfTokens']:undefined} Token Available</p>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col className={`${styles['centeredDiv']} py-sm-4 px-sm-4`} sm="12" md="8" lg="6" xl="4">
        <Card>
            <CardBody>
            <div style={{display:"flex", minHeight:"600px", flexDirection:"column"}}>
                <div style={{marginBottom: "auto"}}>
                  <Image alt="Card image cap" src={img1}  layout="responsive"></Image>
                  <div style={{position: "relative", zIndex:"+1",top:"-16%", left:"42%"}}>
                    <Badge color="success">{tierData !== undefined ? tierData[0]['title']:undefined}</Badge>
                  </div>
                  <p>{tierData !== undefined ? tierData[0]['priceUSD']:undefined} USD</p>
                  <DropdownItem divider />
                  <p>{tierData !== undefined ? tierData[0]['perkDescription'][0]:undefined}</p>
                </div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-lg text-gray bg-palette-primary hover:bg-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-2"
                  >
                    Buy Now
                </button>
              <p>{tierData !== undefined ? tierData[0]['numberOfTokens']:undefined} Token Available</p>
            </div>
            </CardBody>
          </Card>
        </Col>
          
      </Row>
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <Row>
                  <h2 className="mt-2 mb-5">Blockchain Information</h2>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h5 className="mt-2 mb-3">Blockchain</h5>
                    <h5 className="mt-2 mb-3">{false ? dropData['blockchain']:"Polygon"}</h5>
                  </div>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h5 className="mt-2 mb-3">Contract Address</h5>
                    <h5 className="mt-2 mb-3">{false ? dropData['blockchainAddress']:"0xb7fd4057d0ea5b39d4895dff62d2cd0557b45326"}</h5>
                  </div>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h5 className="mt-2 mb-3">Legal</h5>
                    {dropData!== undefined && (
                      <Link
                        href={{
                          pathname: "https://fanfundappnextjsc2211f08a3044700a3439e7e70a559f01535-dev.s3.us-east-1.amazonaws.com/legal/[id].pdf",
                          query: {
                            id: dropData['id'],
                          }
                        }}
                        as={`https://fanfundappnextjsc2211f08a3044700a3439e7e70a559f01535-dev.s3.us-east-1.amazonaws.com/legal/${dropData['id']}.pdf`}
                      >
                        <a style={{color:"blue"}}>
                          <h5 className="mt-2 mb-3">Read more</h5>
                        </a>
                      </Link>
                    )}
                  </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
