import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
} from "reactstrap";
import Blog from "../../src/components/dashboard/Blog";
import bg1 from "../../src/assets/images/bg/bg1.jpg";
import bg2 from "../../src/assets/images/bg/bg2.jpg";
import bg3 from "../../src/assets/images/bg/bg3.jpg";
import bg4 from "../../src/assets/images/bg/bg4.jpg";
import Image from "next/image";
import { API } from "@aws-amplify/api";
import React, { useContext, useState, useEffect } from "react"
import Amplify, { Analytics, Auth, Storage } from "aws-amplify";
import BreadCrumbs from "../../src/layouts/BreadCrumbs"
import { useRouter } from 'next/router'





const Post = () => {

  const [blogData, setBlogData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if(!router.isReady) return;
    const postIDFromURL = router.query.id.toString();
    console.log(postIDFromURL)
    fetchBlogInfo(postIDFromURL);
  }, [router.isReady, router.query]);

  async function fetchBlogInfo(postIDFromURL) {
    console.log(postIDFromURL)
    //const currentUser = await Auth.currentAuthenticatedUser();
    try {
      var myVar = postIDFromURL
      console.log(postIDFromURL)
      var myQuery = `query ListPostsFromUpdatesBlog {
        getPost(id: $postIDFromURL) {
          id
          createdAt
          description
          postcontent
          title
          updatedAt
        }
      }`
        await API.graphql({
            query: myQuery,
            variables: {postIDFromURL: {myVar}}
        }).then(result => {
          const item = result['data']['getPost']
          console.log(item)
          setBlogData(item)
          console.log(blogData)
        })
        
    } catch (err) {
        console.log(err);
    }
  }


  return (
    <div>
      <BreadCrumbs />
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-3">News</h5>
      <Row>
      <Card>
        <Image alt="Card image cap" src={bg1} />
        <CardBody className="p-4">
          <CardTitle tag="h5">Test</CardTitle>
          <CardSubtitle>Test</CardSubtitle>
          <CardText className="mt-3 text-muted">Test</CardText>
        </CardBody>
      </Card>

      </Row>
      
    </div>
  );
};

export default Post;
