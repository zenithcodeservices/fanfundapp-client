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





export default function Artists() {
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
        <div>
          {/***Top Cards***/}
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
{/*               <div className={styles['artistInfo']}>

              </div> */}
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
{/*                 </Col>
                <Col sm="6" lg={{offset:8, size:4}}>
 */}                  <TopCards
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


        </div>
      </div>
  );
}
