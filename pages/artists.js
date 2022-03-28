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
                <TopCards
                  bg="bg-light-success text-success"
                  title="Profit"
                  subtitle="Yearly Earning"
                  earning="$21k"
                  icon="bi bi-wallet"
                />
              </Col>
              <Col sm="6" lg="4">
                        <TopCards
                          bg="bg-light-danger text-danger"
                          title="Refunds"
                          subtitle="Refund given"
                          earning="$1k"
                          icon="bi bi-coin"
                        />
                        <TopCards
                          bg="bg-light-danger text-danger"
                          title="Refunds"
                          subtitle="Refund given"
                          earning="$1k"
                          icon="bi bi-coin"
                        />
                </Col>
                <Col sm="6" lg={{offset:8, size:4}}>
                  <TopCards
                    bg="bg-light-warning text-warning"
                    title="New Project"
                    subtitle="Yearly Project"
                    earning="456"
                    icon="bi bi-basket3"
                  />
                  <TopCards
                    bg="bg-light-info text-into"
                    title="Sales"
                    subtitle="Weekly Sales"
                    earning="210"
                    icon="bi bi-bag"
                  />
                </Col>
            </Row>


        </div>
      </div>
  );
}
