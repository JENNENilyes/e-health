/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */

import{ React,useState,  useContext } from 'react';
import { useSelector } from "react-redux";
import ImageSlider from "./avatar/Slider";
import { UidContext } from '../AppContext';
import Progressbar from '../variables/Progress_bar';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  UncontrolledDropdown,
  Form,
  Label,
  Input,
  DropdownMenu,
  Row,
  Col,
  DropdownItem,
  UncontrolledTooltip,
  DropdownToggle,
  Table,
} from "reactstrap";
import Stroke from "./stroke";


function Icons() {


















  return (
    <>
      <div className="content">
        <Row>
          
         
         




          <Col md="13">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <img
                      alt="..."
                      className=""
                      src={require("assets/img/chat.png").default}
                    />

              </CardBody>
              <CardFooter>
                
              </CardFooter>
            </Card>
          </Col>
          <Col md="6">


          <Stroke/>

          </Col>

         


        </Row>
        
      </div>
    </>
  );
}

export default Icons;
