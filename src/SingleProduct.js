import React from "react";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardGroup,
  Button,
  Input,
} from "reactstrap";
// import baklava from "./img/baklava.jpg";
// import berrycake from "./img/berrycake.jpg";
// import macarons from "./img/macarons.jpg";

function SingleProduct(props) {
  //const navigate = useNavigate();
  // props
  const productItem = useLocation().state;
  const [amount, setAmount] = useState(0);
  //let imgs = [baklava, berrycake, macarons];
  console.log("im in SingleProduct");

  // useEffect(() => {
  //   //rerender when state has changed
  //   setScore((value) => value + 1);
  //   //allocateImages();
  // }, [amount]);

  return (
    <div id="single-view-container">
      <div id="left-side">
        <img className="singleView" src={productItem.img}></img>
      </div>
      <div id="right-side">
        <div>{productItem.name}</div>
        <div>Description Description Description</div>
        <div>Prize: 3.78 €</div>
        <div>
          <Input
            type="number"
            name="amount"
            id="amount"
            defaultValue="1"
            min="1"
            max="100"
          />
          <Button id="addToCart" onClick={props.updateScore}>
            Add to cart !
          </Button>
        </div>
        you got {amount} products in your cart
      </div>
    </div>
  );
  // onClick={() => {
  //   setAmount(
  //     (value) =>
  //       value + parseInt(document.getElementById("amount").value)
  //   );
  // }}
}

export default SingleProduct;
