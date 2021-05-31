import React from "react";
import "./CardContent.css";

function CardContent(props) {
    return (
        <div className="project card oneCard">
            <div className="card-image">
                <figure className="image"></figure>
                <img className="projectimage" src={props.image} alt="test" />
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.name}</p>
                        <p className="subtitle is-6"><a href={props.githuburl}>Link to Github repository</a></p>
                        <p className="subtitle is-6"><a href={props.deployurl}>Click to watch a demonstration!</a></p>
                        <p className="subtitle is-6">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardContent