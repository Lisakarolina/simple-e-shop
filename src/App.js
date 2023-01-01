import { Component, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
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
import Home from "./Home";
import Gallery from "./Gallery";
import SingleProduct from "./SingleProduct";
import sweets from "./img/desserts.jpg";
import pizza from "./img/pizza.jpg";
import juice from "./img/juice.jpg";
import baklava from "./img/baklava.jpg";
import berrycake from "./img/berrycake.jpg";
import macarons from "./img/macarons.jpg";

const allDesserts = [baklava, berrycake, macarons];

function App() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  function updateScore() {
    setAmount(
      (value) => value + parseInt(document.getElementById("amount").value)
    );
  }
  return (
    <div>
      <Navbar className="my-2" color="secondary" dark>
        <NavbarBrand href="/">Delivery free for products over 20 €</NavbarBrand>
      </Navbar>
      <div id="cart-display">
        <div>
          <div id="cart">🛒</div>
          <div id="no-items">cart items: {amount}</div>
        </div>
      </div>
      <div
        id="bistro"
        onClick={() => {
          navigate("/home");
        }}
      >
        <div id="mascot">🦩</div>
        <h1 id="bistroName">Bistro Flamingo</h1>
      </div>
      <h3 id="bistroDescription">
        Hey there, time to have a bite! Take a break and head to our store to
        treat yourself to our fine products. <br /> Or even better: Have it
        delivered to you.
      </h3>
      <Routes>
        <Route
          exact
          path="/home"
          element={<Home updateScore={updateScore} />}
        />
        <Route
          exact
          path="/products"
          element={<Gallery updateScore={updateScore} />}
        />
        <Route
          path="/products/:productName"
          element={<SingleProduct updateScore={updateScore} />}
        />
        <Route path="" exact element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
