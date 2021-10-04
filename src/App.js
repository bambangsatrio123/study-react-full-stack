import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import NavbarComp from './Fungsional/NavbarComp';
import HomePage from "./Fungsional/HomePage";
import AboutComp from "./Fungsional/AboutComp"
import DetailComp from "./Fungsional/DetailComp";
import ListComp from "./Class/ListComp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={AboutComp}></Route>
          <Route exact path="/mahasiswa" component={ListComp}></Route>
          {/* <Route exact path="/detail/:id" component={DetailComp}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
