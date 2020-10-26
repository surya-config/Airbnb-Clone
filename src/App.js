import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchpage from "./components/SearchPage/Searchpage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Searchpage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
