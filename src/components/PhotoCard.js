import React from "react"

const PhotoCard = props => {

    return (
        <div className = "space-card">
            <img className="photo" alt="Space picture" src={props.imgUrl}/>
        </div>
    )
}
export default PhotoCard;
