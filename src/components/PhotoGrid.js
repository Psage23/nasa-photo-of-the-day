import React, {useState, useEffect} from "react";
import axios from "axios"



export default function PhotoGrid() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=VvxYi49718Og9NoNdtvI3xrBx1bgHYhulAsLR3JB`)
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => {
            console.log("No data found", error)
        })
    },[])

    return (
        <div className="container">
            <img className="picture" alt="Space view of the day" src={data.url}></img>
            <h2>Title: {data.title}</h2>
            <p>Today's Date: {data.date}</p>
            <p>Description: {data.explanation}</p>
        </div>
    )
}