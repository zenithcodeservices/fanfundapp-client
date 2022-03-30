import React from "react"

import { Row, Col } from "reactstrap"
import BreadCrumbs from "../src/layouts/BreadCrumbs"
import ProfileCard from "../src/components/ProfileCard"
import Timeline from "../src/components/Timeline"
import styles from '../src/assets/css/profile.module.css'

export default function Profile() {
  return (
    <>
      <Row>
        <Col xs="12" md="12" lg="4">
          <ProfileCard />
        </Col>
        <Col xs="12" md="12" lg="8">
          <Timeline />
        </Col>
      </Row>
    </>
  )
}
