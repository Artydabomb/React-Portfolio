import React from "react";
import CardContent from "../CardContent/CardContent";
import "./BodyNoLogin.css";

function BodyNoLogin(prop) {
    return (
        <div className="tile is-ancestor parentTile">
            <div className="tile is-parent">
                <div className="tile is-child box ">
                    <div className="columns">
                        <div className="columns">
                            <CardContent />
                        </div>
                        <div className="columns">
                            <CardContent />
                        </div>
                        <div className="columns">
                            <CardContent />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="columns">
                            <CardContent />
                        </div>
                        <div className="columns">
                            <CardContent />
                        </div>
                        <div className="columns">
                            <CardContent />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BodyNoLogin