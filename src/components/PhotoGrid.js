import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from 'styled-components';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
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
        <Card>
        <CardImg top width="100%" src={data.url} alt="Space view of the day" />
        <CardBody>
          <CardTitle>Title: {data.title}</CardTitle>
          <CardSubtitle>Today's Date: {data.date}</CardSubtitle>
          <CardText>Description: {data.explanation}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    )
}