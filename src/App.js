import React, {useState, useEffect} from "react";
import PhotoGrid from "./components/PhotoGrid";
import "./App.css";
import { tsPropertySignature } from "@babel/types";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=VvxYi49718Og9NoNdtvI3xrBx1bgHYhulAsLR3JB`)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log("No data found", error)
    })
},[])

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
