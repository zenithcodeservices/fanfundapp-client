import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import bg1 from "../../assets/images/bg/bg1.jpg";

const Blog = ({ title, subtitle, text, color }) => {
  return (
    <Card>
      <Image alt="Card image cap" src={bg1} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText className="mt-3 text-muted">{text}</CardText>
        <Link href="https://medium.com/blockchain-manchester/erc-721-metadata-standards-and-ipfs-94b01fea2a89"><Button color={color}>Read More</Button></Link>
      </CardBody>
    </Card>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Blog;
