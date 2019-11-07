import React from "react";
import PhotoGrid from "./components/PhotoGrid";
import "./App.css";
import { Jumbotron, Container } from 'reactstrap';

function App() {

  return (
    <div className="App">
      <div className="header">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">NASA Photo Of the Day</h1>
          <p className="lead">“Space is for everybody. It’s not just for a few people in science or math, or for a select group of astronauts.<br></br> That’s our new frontier out there, and it’s everybody’s business to know about space.”
          – Christa McAuliffe</p>
        </Container>
      </Jumbotron>
      </div>
      <div>
      <PhotoGrid />
      </div>
    </div>
  );
}

export default App;
