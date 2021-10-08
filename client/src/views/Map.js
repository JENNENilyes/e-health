
import React from "react";
import Modal from "react-modal";
import Calendar from "../variables/calendar";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

Modal.setAppElement('#root')

function Map(){
  return(
    <>
    <div className="content">
      <Row>
        <Col md="12">
          <Card className="card-plain">
            <CardHeader>Calendar</CardHeader>
            <CardBody>
              <div
                //id="map"
                //className="map"
                style={{ position: "relative", overflow: "auto" }}
              >
                <Calendar />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  </>
);
}
export default Map ;