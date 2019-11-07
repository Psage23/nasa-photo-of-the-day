import React from "react";
import PhotoGrid from "./components/PhotoGrid";
import "./App.css";



function App() {

  return (
    <div className="App">
      <div className="header">
        <h1>Nasa Photo Of the Day</h1>
      </div>
      <PhotoGrid />
    </div>
  );
}

export default App;
