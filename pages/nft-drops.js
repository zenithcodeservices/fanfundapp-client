import { Card, CardBody } from "reactstrap"
import TwoColumn from "../src/components/twoColumn/TwoColumn"
import ShopListing from "../src/components/apps/ecommerce/ShopListing"
import EcoSidebar from "../src/components/apps/ecommerce/EcoSidebar"
import styles from '../src/assets/css/nft-drops.module.css'
import CarouselWidget from "../src/components/CarouselWidget"

export default function UpcomingNFTDrops() {
  return (
      
      <><span style={{ margin: "1em" }} className="font-semibold text-3xl sm:text-4xl md:text-3xl text-gray ">Featured Drops</span><div className="gap-3"></div><CardBody>

      <CarouselWidget />
      <ShopListing />
    </CardBody></>
  )
}

