import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Breadcrumbs from "./components/breadcrumbs";
import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import ProductDetail from "./pages/product-detail";
import "./styles.css";

const BreadCrumbs = () => {
  return (
    <Router>
      <div className="app">
        <h1>RoadsideCoder Store</h1>
        <Breadcrumbs />
        <hr />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products" component={ProductListing} />
          <Route path="/products/:id" component={ProductDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default BreadCrumbs;
