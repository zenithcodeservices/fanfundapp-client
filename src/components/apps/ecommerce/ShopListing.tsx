import { Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import ShopeItems from "./Shopitems";
import img1 from "../../../assets/images/bg/bg1.jpg";


import type IDropData from '../../../../pages/types/IDropData'

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


    <div className="p-4">
    <Row>
        <Col xs="6" sm="6" md="4" lg="4" key={uri.artistID} className="mb-4">
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
            <a>
              <Image
                src={img1}
                alt="product"
                className="img-fluid rounded-3"
              />
            </a>
          </Link>
          <div className="pt-2">
            <small>{uri.title}</small>
            <h5 className="mb-3">{uri.streamingPercentage}% royalties to holders</h5>
            <div className="d-flex align-items-center">
              <h5>{uri.isSoldOut}</h5>
            </div>
          </div>
        </Col>
    </Row>
    </div>
  );
};

export default ShopListing;
