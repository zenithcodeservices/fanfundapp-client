import styles from '../../src/assets/css/nft-detail.module.css'

import React from "react"
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
import img1 from "../../src/assets/images/products/s1.jpg"
import img2 from "../../src/assets/images/products/s2.jpg"
import img3 from "../../src/assets/images/products/s3.jpg"
import Image from "next/image"

const items = [
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
]

export default function NFTDetail() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [animating, setAnimating] = React.useState(false)

  const next = () => {
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
  })

  return (
    <div>
      <BreadCrumbs />
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <Row>
                <Col sm="8" md="6" lg="6">
                  <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    {slides}
                    <CarouselControl
                      direction="prev"
                      directionText="Previous"
                      onClickHandler={previous}
                    />
                    <CarouselControl
                      direction="next"
                      directionText="Next"
                      onClickHandler={next}
                    />
                  </Carousel>
                </Col>
                <Col sm="4" md="6" lg="6">
                  <Badge color="success">&#123;Single|EP&#125;</Badge>
                  <h3 className="mt-2 mb-3">&#123;title&#125;</h3>
                  <p className="text-muted py-3">
                    &#123;description&#125;
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
        <Col>
          <Card>
            <CardBody>
              <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                  <div style={{borderRadius:"5px", border:"2px solid gray"}}>
                    <div style={{width:"230px"}}>
                      <Image alt="Card image cap" src="/images/bg1.jpg"  width={200} height={200} layout="responsive"></Image>
                    </div>
                    <div style={{position: "relative", zIndex:"+1",top:"-4%", left:"80px"}}>
                      <Badge color="success">&#123;B Tier&#125;</Badge>
                    </div>
                    <p>&#123;PriceUSD&#125;</p>
                    <DropdownItem divider />
                    <p>&#123;Perk Description&#125;</p>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-lg text-gray bg-palette-primary hover:bg-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-2"
                      >
                        Buy Now
                    </button>
                  </div>
                  <p>&#123;Remaining Tokens&#125;</p>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                  <div style={{borderRadius:"5px", border:"2px solid gray"}}>
                    <div style={{width:"230px"}}>
                      <Image alt="Card image cap" src="/images/bg1.jpg"  width={200} height={200} layout="responsive"></Image>
                    </div>
                    <div style={{position: "relative", zIndex:"+1",top:"-4%", left:"80px"}}>
                      <Badge color="success">&#123;A Tier&#125;</Badge>
                    </div>
                    <p>&#123;PriceUSD&#125;</p>
                    <DropdownItem divider />
                    <p>&#123;Perk Description&#125;</p>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-lg text-gray bg-palette-primary hover:bg-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-2"
                      >
                        Buy Now
                    </button>
                  </div>
                  <p>&#123;Remaining Tokens&#125;</p>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                  <div style={{borderRadius:"5px", border:"2px solid gray"}}>
                    <div style={{width:"230px"}}>
                      <Image alt="Card image cap" src="/images/bg1.jpg"  width={200} height={200} layout="responsive"></Image>
                    </div>
                    <div style={{position: "relative", zIndex:"+1",top:"-4%", left:"80px"}}>
                      <Badge color="success">&#123;S Tier&#125;</Badge>
                    </div>
                    <p>&#123;PriceUSD&#125;</p>
                    <DropdownItem divider />
                    <p>&#123;Perk Description&#125;</p>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-lg text-gray bg-palette-primary hover:bg-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-2"
                      >
                        Buy Now
                    </button>
                  </div>
                  <p>&#123;Remaining Tokens&#125;</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
