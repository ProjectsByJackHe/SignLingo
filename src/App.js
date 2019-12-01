import React from 'react';
import './App.css';
import Text from './Text.js';
import Logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Image, Button } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <Container>
        <center>
          <Image src={Logo} alt="SignLingo" style={{ width: "50%" }}/>
        </center>
        <Switch>
          <Route path="/start">
            <div className="App">
              <Text />
            </div>
          </Route>
          <Route path="/">
            <h2>HOW TO USE THIS APP (LSL): <br />Take a picture of your hand holding up a sign letter, and send that data to the ML model for interpretation.</h2>
            <Link to="/start"><Button color="primary">Learn!</Button></Link>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
