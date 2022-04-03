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
import Blog from "../src/components/dashboard/Blog";
import bg1 from "../src/assets/images/bg/bg1.jpg";
import bg2 from "../src/assets/images/bg/bg2.jpg";
import bg3 from "../src/assets/images/bg/bg3.jpg";
import bg4 from "../src/assets/images/bg/bg4.jpg";
import Image from "next/image";
import { API } from "@aws-amplify/api";
import React, { useContext, useState, useEffect } from "react"
import Amplify, { Analytics, Auth, Storage } from "aws-amplify";






const listPostsFromUpdatesBlogQuery = /* GraphQL */ `
    query ListPostsFromUpdatesBlog {
      listPosts(filter: {blogID: {eq: "3cff1b23-a5cd-4dd0-9741-82c917c9a488"}}) {
        items {
          createdAt
          description
          id
          postcontent
          title
        }
      }
    }
  `

const Cards = () => {

  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    fetchBlogInfo();
    
  }, []);

  const fetchBlogInfo = async () => {
    //const currentUser = await Auth.currentAuthenticatedUser();
    try {
        await API.graphql({
            query: listPostsFromUpdatesBlogQuery
        }).then(result => {
          const items = result['data']['listPosts']['items']
          console.log(items[0])
          setBlogData(items)
        })
        
    } catch (err) {
        console.log(err);
    }
  }


  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-3">News</h5>
      <Row>
        {blogData !== null && blogData.length>0 && blogData.map((blg) => (
          <Col sm="6" lg="6" xl="4" key={blg.title}>
            <Blog
              //image={blg.image}
              title={blg.title}
              subtitle={blg.description}
              text={blg.postcontent}
              id={blg.id}
              color="primary"
            />
          </Col>
        ))}
      </Row>
      
{/*       <Row>
        <h5 className="mb-3 mt-3">Card Group</h5>
        <Col>
          <CardGroup>
            <Card>
              <Image alt="Card image cap" src={bg1} />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <Image alt="Card image cap" src={bg2} />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <Image alt="Card image cap" src={bg3} />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row> */}
    </div>
  );
};

export default Cards;
