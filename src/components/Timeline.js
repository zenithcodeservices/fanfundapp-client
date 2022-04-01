import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import ProfileCard from "./ProfileCard"

import img1 from "../assets/images/users/user1.jpg";
import img2 from "../assets/images/users/user2.jpg";
import img3 from "../assets/images/users/user3.jpg";
import img4 from "../assets/images/users/user4.jpg";

import time1 from "../assets/images/bg/bg1.jpg";
import time2 from "../assets/images/bg/bg2.jpg";
import time3 from "../assets/images/bg/bg3.jpg";
import time4 from "../assets/images/bg/bg4.jpg";

const Timeline = () => {
  const [activeTab, setActiveTab] = useState("2");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <Card>
        <ProfileCard />
        <Nav tabs className="profile-tab">
 {/*          <NavItem>
            <NavLink
              className={
                activeTab === "1"
                  ? "active bg-transparent"
                  : "cursor-pointer text-muted"
              }
              onClick={() => {
                toggle("1");
              }}
            >
              Timeline
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              className={
                activeTab === "2"
                  ? "active bg-transparent"
                  : "cursor-pointer text-muted"
              }
              onClick={() => {
                toggle("2");
              }}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={
                activeTab === "3"
                  ? "active bg-transparent"
                  : "cursor-pointer text-muted"
              }
              onClick={() => {
                toggle("3");
              }}
            >
              Setting
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div className="p-4">
                  <Row>
  
                    <Col md="4" xs="6" className="border-end">
                      <strong>Email</strong>
                      <br />
                      <p className="text-muted">johnathan@admin.com</p>
                    </Col>
                    <Col md="4" xs="6" className="border-end">
                      <strong>Shipping Address</strong>
                      <br />
                      <p className="text-muted">London</p>
                    </Col>
                    <Col md="4" xs="6" className="border-end">
                      <strong>Wallet Address</strong>
                      <br />
                      <p className="text-muted">0x0</p>
                    </Col>
                  </Row>
                  <p className="mt-4">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae.
                  </p>
                  <h4 className="font-medium mt-4">Stats</h4>
                  <hr />
                  <h5 className="mt-4">
                    NFTs Collected <span className="float-end">8</span>
                  </h5>
{/*                   <Progress value={2 * 5} />
                  <h5 className="mt-4">
                    HTML 5 <span className="float-end">90%</span>
                  </h5>
                  <Progress color="success" value="25" />
                  <h5 className="mt-4">
                    jQuery <span className="float-end">50%</span>
                  </h5>
                  <Progress color="info" value={50} />
                  <h5 className="mt-4">
                    Photoshop <span className="float-end">70%</span>
                  </h5>
                  <Progress color="warning" value={75} /> */}
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <div className="p-4">
                  <Form>
                    <FormGroup>
                      <Label>First Name</Label>
                      <Input type="text" placeholder="Shaina Agrawal" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Last Name</Label>
                      <Input type="text" placeholder="Shaina Agrawal" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input type="email" placeholder="Jognsmith@cool.com" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Shipping Address</Label>
                      <Input type="text" placeholder="123 Barrack Street" />
                    </FormGroup>
{/*                     <FormGroup>
                      <Label>Select Country</Label>
                      <Input type="select">
                        <option>USA</option>
                        <option>India</option>
                        <option>America</option>
                      </Input>
                    </FormGroup>
 */}                    <Button color="primary">Update Profile</Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Card>
    </>
  );
};

export default Timeline;
