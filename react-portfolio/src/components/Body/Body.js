import React from "react";
import CardContent from "../CardContent/CardContent";
import "./Body.css";
import projects from "../../projects.json";

function Body() {
    return (
        <div className="tile is-ancestor parentTile">
            <div className="tile is-parent">
                <div className="tile is-child box ">
                    <div className="columns">
                        {
                            projects.map(item =>
                                <div className="columns">
                                    <CardContent
                                        image={item.image}
                                        name={item.name}
                                        githuburl={item.githuburl}
                                        deployurl={item.deployurl}
                                        description={item.description}
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Body