import React, {useState, useEffect} from "react";
import axios from "axios";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink,
} from 'reactstrap';



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
        // <div className="container">
        //     <img className="picture" alt="Space view of the day" src={data.url}></img>
        //     <h2>Title: {data.title}</h2>
        //     <p>Today's Date: {data.date}</p>
        //     <p>Description: {data.explanation}</p>
        // </div>
      //   <Card>
      //   <CardImg top width="100%" src={data.url} alt="Space view of the day" />
      //   <CardBody>
      //     <CardTitle>Title: {data.title}</CardTitle>
      //     <CardSubtitle>Today's Date: {data.date}</CardSubtitle>
      //     <CardText>Description: {data.explanation}</CardText>
      //     <Button>Button</Button>
      //   </CardBody>
      // </Card>
      <div className="container">
      <Card>
      <CardBody>
        <CardTitle><h2>Title:</h2>{data.title}</CardTitle>
        <CardSubtitle><h2>Today's Date:</h2>{data.date}</CardSubtitle>
      </CardBody>
      <img width="100%" src={data.url} alt="Space view of the day" />
      <CardBody>
        <CardText><h2>Description:</h2>{data.explanation}</CardText>
        <CardLink href="https://apod.nasa.gov/apod/calendar/allyears.html">Calendar of Nasa Photos of the Day</CardLink>
        <CardLink href="https://apod.nasa.gov/apod/lib/edlinks.html">Learn More about Space</CardLink>
      </CardBody>
      </Card>
      </div>
    )
}