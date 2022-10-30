import React from "react";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardGroup,
  Row,
  Col,
} from "reactstrap";
import baklava from "./img/baklava.jpg";
import berrycake from "./img/berrycake.jpg";
import macarons from "./img/macarons.jpg";

function Gallery(props) {
  const navigate = useNavigate();
  // props
  //let imgs = [baklava, berrycake, macarons];
  const imgs = useLocation().state;
  const path = useLocation();
  console.log("im in gallery");
  return (
    <div id="card-container">
      {imgs.map((item, i) => (
        // props.items

        <Card
          onClick={() => {
            console.log("navigating...");
            //<Navigate to="/somewhere" />;
            console.log(path.pathname);
            navigate(`${path.pathname}/${item.name}`, {
              state: { name: item.name, img: item.img },
            });
          }}
        >
          <CardImg src={item.img} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">{item.name}</CardTitle>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Gallery;
