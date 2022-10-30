import { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import "./App.css";
import Gallery from "./Gallery";
import sweets from "./img/desserts.jpg";
import pizza from "./img/pizza.jpg";
import juice from "./img/juice.jpg";
import baklava from "./img/baklava.jpg";
import berrycake from "./img/berrycake.jpg";
import macarons from "./img/macarons.jpg";
import tiramisu from "./img/tiramisu.jpg";
import melonjuice from "./img/melonjuice.jpg";
import strawberryjuice from "./img/strawberryjuice.jpg";
import happyjuice from "./img/happyjuice.jpg";
import prosciuttopizza from "./img/prosciuttopizza.jpg";
import rucolapizza from "./img/rucolapizza.jpg";
import salamipizza from "./img/salamipizza.jpg";
import spinachpizza from "./img/spinachpizza.jpg";

const pizze = [
  { img: prosciuttopizza, name: "Pizza Prosciutto" },
  { img: rucolapizza, name: "Pizza Rucola" },
  { img: salamipizza, name: "Pizza Salami" },
  { img: spinachpizza, name: "Pizza Spinachi" },
];
const sweet = [
  { img: tiramisu, name: "Tiramisu" },
  { img: macarons, name: "Macarons" },
  { img: baklava, name: "Baklava" },
  { img: berrycake, name: "Berry Cake" },
];
const beverages = [
  { img: melonjuice, name: "Melon Juice" },
  { img: strawberryjuice, name: "Strawberry Juice" },
  { img: happyjuice, name: "Be Happy Juice" },
];

export default function Home(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card-container-home">
        <Card
          onClick={() => {
            navigate("/products", { state: sweet });
          }}
        >
          <CardImg alt="desserts overview" src={sweets} />
          <CardImgOverlay>
            <CardTitle tag="h4">Desserts</CardTitle>
            <CardText>
              Check out our wide range of irresistible sweets !
            </CardText>
          </CardImgOverlay>
        </Card>
        <Card
          onClick={() => {
            navigate("/products", { state: pizze });
          }}
        >
          <CardImg alt="pizza overview" src={pizza} />
          <CardImgOverlay>
            <CardTitle tag="h5">Pizza</CardTitle>
            <CardText>Grab some Pizza !</CardText>
          </CardImgOverlay>
        </Card>
        <Card
          inverse
          onClick={() => {
            navigate("/products", { state: beverages });
          }}
        >
          <CardImg alt="juice overview" src={juice} />
          <CardImgOverlay>
            <CardTitle tag="h5">Juice Anyone ?</CardTitle>
            <CardText>There's nothing you can't make juice of !</CardText>
          </CardImgOverlay>
        </Card>
      </div>
      <Button
        id="showAll"
        onClick={() => {
          navigate("/products", { state: [...sweet, ...pizze, ...beverages] });
        }}
      >
        Show me all the Products!
      </Button>
      <Routes>
        <Route exact path="/products" element={<Gallery />} />
      </Routes>
    </>
  );
}
