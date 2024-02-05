import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} />

            Route for 404 Not Found
            <Route component={NotFound} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
