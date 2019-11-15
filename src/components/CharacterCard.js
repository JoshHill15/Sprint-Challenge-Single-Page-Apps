import React from "react";
import "../index.css"

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";
function CharacterCard({ cv, index }) {
  return (
    <div className = "card">
      {/* <Col sm = "9"> */}
        <Card key = {index}>
          <CardImg
            top
            width="100%"
            src={cv.image}
            alt="Card image cap"
          />
          <CardBody className = "cardbody">
            <ul>
            <li><CardTitle>{cv.name}</CardTitle></li>
            <li><CardSubtitle>{cv.gender}</CardSubtitle></li>
            <li><CardText>{cv.species}</CardText></li>
            </ul>
          </CardBody>
        </Card>
      {/* </Col> */}
    </div>
  );
}
export default CharacterCard;
