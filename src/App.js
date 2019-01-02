import React, { Component } from "react";
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import Challenges from "./components/Challenge";
import MonEquipe from "./components/MonEquipe";
import "./styles/App.css";
import "./styles/navbar.css";
import Logo from "./img/logo.png";
import Success from "./components/Success";
import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Navbar className="mynavbar">
              <NavbarBrand className="logohome">
                <img src={Logo} alt="Coup de Pousse" />
              </NavbarBrand>
              <Nav className="navigation">
                <NavItem className="itemMenu">
                  <NavLink exact to="/" activeClassName="activeLien">
                    Mes challenges
                  </NavLink>
                </NavItem>
                <NavItem className="itemMenu">
                  <NavLink exact to="/MonEquipe" activeClassName="activeLien">
                    Mon équipe
                  </NavLink>
                </NavItem>
                <NavItem className="itemMenu">
                  <NavLink exact to="/success" activeClassName="activeLien">
                    Mes réussites
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>

            <Switch>
              <Route exact path="/" component={Challenges} />
              <Route exact path="/MonEquipe" component={MonEquipe} />
              <Route exact path="/success" component={Success} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
