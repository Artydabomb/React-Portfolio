import React from "react";
import CardContent from "../CardContent/CardContent";
import "./Body.css";
import projects from "../../projects.json";

function Body() {
    return (
        <div className="project-grid">
            {
                projects.map(item =>
                    <div>
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
    );
}

export default Body