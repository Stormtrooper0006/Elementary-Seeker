import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import SchoolList from "./pages/school_list/SchoolList";
import SchoolDetail from "./pages/school_detail/SchoolDetail";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/school-list" component={SchoolList} />
          <Route exact path="/school-list/:id" component={SchoolDetail} />
          {/* <Route path="/about" component={About} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
