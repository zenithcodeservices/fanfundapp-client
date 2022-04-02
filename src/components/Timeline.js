import React, { useContext, useState, useEffect } from "react"
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


import UserContext from '../../lib/userContext'

import Amplify, { Analytics, Auth, Storage } from "aws-amplify";
import { setSourceMapRange } from "typescript";
Storage.configure({ track: true, level: "private" });





const Timeline = () => {

  useEffect(() => {
    onPageRendered();
    fetchUserInfo();
    
  }, []);
  
  const onPageRendered = async () => {
    getProfilePicture();
  };
  
  const fetchUserInfo = async () => {
    await Auth.currentAuthenticatedUser().then(user => {
      setUser(user)
      console.log(user)
      console.log(user.attributes.username)
      setFirstName(user.attributes.name)
      setLastName(user.attributes.family_name)
      setEmail(user.attributes.email)
      {user.attributes['custom:shippingAddress'] ? setAddress(user.attributes['custom:shippingAddress']) : setAddress("")}
      if(user.attributes.address){
        setAddress(user.attributes.address)
      }
    })
  }
  
  
  const getProfilePicture = async () => {
    console.log(`${UserContext.username}-avatar.png`)
    await Storage.get(`${UserContext.username}-avatar.png`)
      .then(url => {
        var myRequest = new Request(url);
        fetch(myRequest).then(function(response) {
          if (response.status === 200) {
            console.log(url)
            setTimeout(() => {
              setImage(url);
              UserContext.img = url
            }, 10);
          }
        });
      })
      .catch(err => console.log(err));
  };

  const updateProfile = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    var submitEmail = ""
    var submitFirstName = ""
    var submitLastName = ""
    var submitAddress = ""
    {formAddress ? submitAddress = formAddress : submitAddress = address}
    {formEmail ? submitEmail = formEmail : submitEmail = email}
    {formFirstName ? submitFirstName = formFirstName : submitFirstName = firstName}
    {formLastName ? submitLastName = formLastName : submitLastName = lastName}
    await Auth.currentAuthenticatedUser().then(user => {
      try {
        let result = Auth.updateUserAttributes(user, {
          'email': submitEmail,
          'name': submitFirstName,
          'family_name': submitLastName,
          'custom:shippingAddress': submitAddress
        })
        console.log(result)
        setSuccessDialog("Update Successful")
        
      }
      catch (err) {
        console.log(error['message'])
        setErrorWarning(error['message'])
      }
      setIsLoading(false)

    })
  }
  

  const [isLoading , setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [image, setImage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [formFirstName, setFormFirstName] = useState("");
  const [formLastName, setFormLastName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formAddress, setFormAddress] = useState("");

  const [errorWarning, setErrorWarning] = useState('')
  const [successDialog, setSuccessDialog] = useState('')


  const [activeTab, setActiveTab] = useState("2");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <Card>
        <ProfileCard user={user} />
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
                      <p className="text-muted">{email}</p>
                    </Col>
                    <Col md="4" xs="6" className="border-end">
                      <strong>Shipping Address</strong>
                      <br />
                      <p className="text-muted">{address ? address : "London"}</p>
                    </Col>
                    <Col md="4" xs="6" className="border-end">
                      <strong>Wallet Address</strong>
                      <br />
                      <p className="text-muted">{UserContext.address ? UserContext.address : "0x0"}</p>
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
                  <Form onSubmit={updateProfile}>
                    <FormGroup>
                      <Label>First Name</Label>
                      <Input onChange={(e) => setFormFirstName(e.target.value)} type="text" placeholder={firstName} />
                    </FormGroup>
                    <FormGroup>
                      <Label>Last Name</Label>
                      <Input onChange={(e) => setFormLastName(e.target.value)} type="text" placeholder={lastName} />
                    </FormGroup>
  {/*                   <FormGroup>
                      <Label>Email</Label>
                      <Input onChange={(e) => setFormEmail(e.target.value)} type="email" placeholder={email} />
                    </FormGroup> */}
                    <FormGroup>
                      <Label>Shipping Address</Label>
                      <Input onChange={(e) => setFormAddress(e.target.value)} type="text" placeholder={address ? address : "123 Barrack Street"} />
                    </FormGroup>
{/*                     <FormGroup>
                      <Label>Select Country</Label>
                      <Input type="select">
                        <option>USA</option>
                        <option>India</option>
                        <option>America</option>
                      </Input>
                    </FormGroup>
 */}                    <Button type="submit" color="primary">Update Profile</Button>
                  </Form>
                  <br></br>
                  {
                    successDialog === '' ?
                      null
                      :
                      <div className="bg-green-50 p-2 rounded-lg border border-green-500 text-green-600 font-semibold">
                        {successDialog}
                      </div>
                  }

                  {
                    errorWarning === '' ?
                      null
                      :
                      <div className="bg-red-50 p-2 rounded-lg border border-red-500 text-red-600 font-semibold">
                        Error! {errorWarning}
                      </div>
                  }
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
