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
import React, { useContext, useState, useEffect } from "react"

import UserContext from '../../lib/userContext'

import Amplify, { Analytics, Auth, Storage } from "aws-amplify";
Storage.configure({ track: true, level: "private" });


const ProfileCard = (user) => {

  useEffect(() => {
    onPageRendered();
    fetchUserInfo();
    
  }, []);

  const onPageRendered = async () => {
    getProfilePicture();
  };

  const fetchUserInfo = async () => {
    await Auth.currentAuthenticatedUser().then(user => {
      setFirstName(user.attributes.name)
      setLastName(user.attributes.family_name)
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

  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  let fileInput = React.createRef();

  const onOpenFileDialog = () => {
    fileInput.current.click();
  };

  const onProcessFile = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    try {
      reader.readAsDataURL(file);
    } catch (err) {
      console.log(err);
    }
    reader.onloadend = () => {
      setImage(reader.result);
    };
    Storage.put(`${UserContext.username}-avatar.png`, file, {
      contentType: "image/png"
    })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };


  return (
    <Card>
      <CardBody className="text-center">
        <div className="mt-3 pt-1">


              <Image
              src={UserContext.img ? UserContext.img : img1}
              className="rounded-circle  border-2 border-light shadow border p-1"
              width="90"
              height="90"
              alt="avatar"
              />
            
             
        </div>
        <br></br>
        <div style={{marginLeft:"3em"}}>
                <input
                    type="file"
                    onChange={onProcessFile}
                    ref={fileInput}
                    hidden={false}
                />
        </div>

        <CardTitle className="mb-1 mt-3" tag="h4">
          {firstName} {lastName}
        </CardTitle>

        <CardSubtitle className="mb-3 pb-1 text-muted">
        </CardSubtitle>

{/*         <Row className="mt-4">
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
        </Row> */}

      </CardBody>

{/*       <CardBody className="bg-light mt-3">
        <div className="p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </CardBody> */}
    </Card>
  );
};

export default ProfileCard;
