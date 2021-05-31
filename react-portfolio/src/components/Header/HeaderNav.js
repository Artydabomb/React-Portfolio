import React from "react";
import "./HeaderNav.css";

function HeaderNav() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item navbarMain" href="https://github.com/Artydabomb">
                    <h1>Arthur Leung</h1>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="test">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="test">
                        Get in Touch!
                    </a>
                </div>
            </div>
        </nav>

    );
}

export default HeaderNav;