import React, { Component } from "react";

// * import react-router-dom
import { Switch, Route } from "react-router-dom";

// * import module / dependency
import "bootstrap/dist/css/bootstrap.min.css";

// * import css
import "./App.css";

// * import components
import Navbar from "./../Components/Header/Navbar";
import ProductList from "./../Components/Product/ProductList";
import Details from "./../Components/Details/Details";
import Cart from "./../Components/Cart";
import Default from "./../Components/Default/Default";
import Modal from "./../Components/Modal/Modal";
import Footer from "./../Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        {/* react-router-dom */}
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
