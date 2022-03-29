import Head from "next/head";
import { Col, Row } from "reactstrap";
import TopCards from "../src/components/dashboard/TopCards";
import styles from '../src/assets/css/nft-drops.module.css'

export default function UpcomingNFTDrops() {
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
            <Col sm="6" lg="3">
              <TopCards
                bg="bg-light-success text-success"
                title="Profit"
                subtitle="Yearly Earning"
                earning="$21k"
                icon="bi bi-wallet"
              />
            </Col>
            <Col sm="6" lg="3">
              <TopCards
                bg="bg-light-danger text-danger"
                title="Refunds"
                subtitle="Refund given"
                earning="$1k"
                icon="bi bi-coin"
              />
            </Col>
            <Col sm="6" lg="3">
              <TopCards
                bg="bg-light-warning text-warning"
                title="New Project"
                subtitle="Yearly Project"
                earning="456"
                icon="bi bi-basket3"
              />
            </Col>
            <Col sm="6" lg="3">
              <TopCards
                bg="bg-light-info text-into"
                title="Sales"
                subtitle="Weekly Sales"
                earning="210"
                icon="bi bi-bag"
              />
            </Col>
          </Row>
 {/*          <Row>
            <Col sm="12" lg="12">
              <SalesChart />
            </Col>
          </Row>
          <Row>
            <Col lg="6" xxl="8" sm="12">
              <ProjectTables />
            </Col>
            <Col sm="12" lg="6" xl="5" xxl="4">
              <Feeds />
            </Col>
          </Row>
          <Row>
            {BlogData.map((blg) => (
              <Col sm="6" lg="6" xl="3" key={blg.title}>
                <Blog
                  image={blg.image}
                  title={blg.title}
                  subtitle={blg.subtitle}
                  text={blg.description}
                  color={blg.btnbg}
                />
              </Col>
            ))}
          </Row> */}
        </div>
      </div>
  );
}
