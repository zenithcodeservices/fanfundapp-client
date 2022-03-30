import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import Image from "next/image";
import img1 from "../assets/images/users/user4.jpg";

const ProfileCard = () => {
  return (
    <Card>
      <CardBody className="text-center">
        <div className="mt-3 pt-1">
          <Image
            src={img1}
            className="rounded-circle  border-2 border-light shadow border p-1"
            width="90"
            height="90"
            alt="avatar"
          />
        </div>

        <CardTitle className="mb-1 mt-3" tag="h4">
          Milan Cooper
        </CardTitle>

        <CardSubtitle className="mb-3 pb-1 text-muted">
          Design is intelligence made visible <span></span>😎.
        </CardSubtitle>

        <Row className="mt-4">
          <Col xs="4">
            <h5 className="fw-bold">1M</h5>
            <span className="text-muted">Followers</span>
          </Col>
          <Col xs="4" className="border-start border-end">
            <h5 className="fw-bold">0</h5>
            <span className="text-muted">Following</span>
          </Col>
          <Col xs="4">
            <h5 className="fw-bold">1,000</h5>
            <span className="text-muted">Posts</span>
          </Col>
        </Row>

      </CardBody>

      <CardBody className="bg-light mt-3">
        <div className="p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
