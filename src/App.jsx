import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import SchoolList from "./pages/school_list/SchoolList";
import SchoolDetail from "./pages/school_detail/SchoolDetail";
import AboutUs from "./pages/about_us/AboutUs";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/school-list" component={SchoolList} />
          <Route exact path="/school-list/:id" component={SchoolDetail} />
          <Route exact path="/about-us" component={AboutUs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
