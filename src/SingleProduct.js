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

function SingleProduct(props) {
  const productItem = useLocation().state;
  const [amount, setAmount] = useState(0);

  return (
    <div id="single-view-container">
      <div id="left-side">
        <img className="singleView" src={productItem.img}></img>
      </div>
      <div id="right-side">
        <h3 id="item-name">{productItem.name}</h3>
        <div>Description praising product</div>
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
      </div>
    </div>
  );
}

export default SingleProduct;
