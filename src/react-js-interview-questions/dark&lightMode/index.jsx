import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {ThemeProvider} from "./theme-context";

import Navbar from "./components/navbar";
import About from "./pages/about";
import Blog from "./pages/blog";
import Home from "./pages/home";

import "./styles.css";

const DarkAndLight = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default DarkAndLight;
