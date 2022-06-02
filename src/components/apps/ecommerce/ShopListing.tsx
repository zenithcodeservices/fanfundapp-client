import { Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import ShopeItems from "./Shopitems";
import img1 from "../../../assets/images/bg/bg1-square.png";

import styles from './ShopListing.module.css'


import type IDropData from '../../../types/IDropData'

const ShopListing = (data: any) => {

  let uri: IDropData = data.uri

  return (
/*     <div className="p-4">
      <Row>
        {ShopeItems.map((product) => (
          <Col xs="6" sm="6" md="4" lg="4" key={product.id} className="mb-4">
            <Link href="/NFTs/nft-detail">
              <a>
                <Image
                  src={product.photo}
                  alt="product"
                  className="img-fluid rounded-3"
                />
              </a>
            </Link>
            <div className="pt-2">
              <small>{product.category}</small>
              <h5 className="mb-3">{product.title}</h5>
              <div className="d-flex align-items-center">
                <h5>{product.price}</h5>
                <div className="ms-auto">
                  {product.star.map((index) => (
                    <i className="bi bi-star-fill text-warning" key={index} />
                  ))}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div> */


    <div className={`${styles['wrapperDiv']} mt-2 p-4 col-sm-12 col-md-6 col-lg-5 col-xl-4`}>
    <Row>
        <Col key={uri.artistID}>
        <div style={{cursor:"pointer"}}>
          <Link
            href={{
              pathname: "/NFTs/nft-detail?drop=[id]",
              query: {
                id: uri['id'],
              }
            }}
            // as={`/NFTs/nft-detail?id=${uri['id'].substr(uri['id'].length - 5)}`}
            as={`/NFTs/nft-detail?id=${uri['id']}`}
          >
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
            </Link>
        </div>
          <div className="pt-2">
            <div className="mb-4"></div>
            <p style={{fontSize:"1em"}} className="mb-2">{uri['artist']['name']}</p>
            <p style={{fontSize:"1.6em"}} className="mb-4">{uri.title}</p>
            <p style={{fontSize:"1.3em"}}>Tokens Remaining: 23/3000</p>
          </div>
        </Col>
    </Row>
    </div>
  );
};

export default ShopListing;
