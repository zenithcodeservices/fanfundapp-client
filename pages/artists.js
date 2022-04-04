import Head from "next/head";
import { Col, Row } from "reactstrap";
import SalesChart from "../src/components/dashboard/SalesChart";
import Feeds from "../src/components/dashboard/Feeds";
import ProjectTables from "../src/components/dashboard/ProjectTable";
import TopCards from "../src/components/dashboard/TopCards";
import Blog from "../src/components/dashboard/Blog";
import bg1 from "../src/assets/images/bg/bg1.jpg";
import bg2 from "../src/assets/images/bg/bg2.jpg";
import bg3 from "../src/assets/images/bg/bg3.jpg";
import bg4 from "../src/assets/images/bg/bg4.jpg";
import { Card, CardBody } from 'reactstrap';
import styles from '../src/assets/css/artists.module.css'
import React, { useContext, useState, useEffect } from "react"
import { API } from "@aws-amplify/api";






const listDropsFromHappyAloneQuery = /* GraphQL */ `
    query ListDropsFromHappyAlone {
      listDrops(filter: {artistID: {eq: "aaf82423-b785-43d8-b2fa-e6ce6c0b10b4"}}) {
        items {
          title
          postcontent
          description
          dropDateTime
          streamingPercentage
          isSoldOut
        }
      }
    }
  `




export default function Artists() {

  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    fetchBlogInfo();
    
  }, []);

  const fetchBlogInfo = async () => {
    //const currentUser = await Auth.currentAuthenticatedUser();
    try {
        await API.graphql({
            query: listDropsFromHappyAloneQuery
        }).then(result => {
          const items = result['data']['listDrops']['items']
          console.log(items[0])
          setBlogData(items)
        })
        
    } catch (err) {
        console.log(err);
    }
  }  
  return (
      <div>
        <Head>
          <title>Fanfund</title>
          <meta
            name="description"
            content="An online crowdfunding platform that rewards early adopter fans"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h5 className="mb-3">Artists</h5>
        <Row>
          {blogData !== null && blogData.length>0 && blogData.map((blg) => (
            <Col sm="6" lg="6" xl="4" key={blg.title}>
              <Blog
                //image={blg.image}
                createdAt={blg.createdAt}
                title={blg.title}
                subtitle={blg.description}
                text={blg.postcontent}
                id={blg.id}
                color="primary"
              />
            </Col>
          ))}
        </Row>


{/*         <div>
            <Row>
              <Col sm="12" lg="8">
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className={`circle-box lg-box d-inline-block bg-light-warning`}>
                      <i className='bi bi-spotify' />
                    </div>
                    <div className="ms-3">
                      <h3 className="mb-0 font-weight-bold">22k</h3>
                      <small className="text-muted">Artist</small>
                    </div>
                  </div>
                </CardBody>
              </Card>
              </Col>

              <Col className={styles.desktopColumn}>
                        <TopCards sm="6" lg="4"
                          bg="bg-bgSpotify"
                          title="Spotify"
                          subtitle="Followers"
                          earning="22k"
                          icon="bi bi-spotify"
                        />
                        <TopCards
                          bg="bg-bgTwitter"
                          title="Twitter"
                          subtitle="Followers"
                          earning="88k"
                          icon="bi bi-twitter"
                        />
              <TopCards
                    bg="bg-light-warning text-warning"
                    title="New Project"
                    subtitle="Yearly Project"
                    earning="456"
                    icon="bi bi-facebook"
                  />
                  <TopCards
                    bg="bg-light-info text-into"
                    title="Sales"
                    subtitle="Weekly Sales"
                    earning="210"
                    icon="bi bi-instagram"
                  />
                </Col>
            </Row>


        </div> */}


      </div>
  );
}
