import { Card, CardBody } from "reactstrap"
import TwoColumn from "../src/components/twoColumn/TwoColumn"
import ShopListing from "../src/components/apps/ecommerce/ShopListing"
import EcoSidebar from "../src/components/apps/ecommerce/EcoSidebar"
import styles from '../src/assets/css/nft-drops.module.css'

export default function UpcomingNFTDrops() {
  return (
    <Card>
      <CardBody>
      <ShopListing />
      </CardBody>
    </Card>
  )
}

