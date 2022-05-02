import {  CardBody } from "reactstrap"
import ShopListing from "../src/components/apps/ecommerce/ShopListing"
import NFTCarousel from '../src/components/carousel/NFTCarousel'

export default function UpcomingNFTDrops() {
  return (

      <>

      <span style={{ margin: "1em" }} className="font-semibold text-3xl sm:text-4xl md:text-3xl text-gray ">
        Featured Drops
      </span>

        <NFTCarousel />

      <CardBody>
      <ShopListing />
      </CardBody>
      </>
  )
}

// export async function getServerSideProps({ req }) {
//   const SSR = withSSRContext({ req });
//   const response = await SSR.API.graphql({ query: listDrops });

//   return {
//     props: {
//       posts: response.data.listPosts.items
//     }
//   };
// }


