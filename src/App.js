import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchResult from "./pages/SearchResult/SearchResult";
import BusinessDetail from "./pages/BusinessDetail/BusinessDetail";
import { useState } from "react";

function App() {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home
              term={term}
              termChange={setTerm}
              location={location}
              locationChange={setLocation}
            />
          </Route>
          <Route path="/search" component={SearchResult} />
          <Route path="/detail/:id" component={BusinessDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
