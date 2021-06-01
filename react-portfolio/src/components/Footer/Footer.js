import React from "react";

function Footer() {
    return (
        <div className="tile-is-ancestor">
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                        <strong>Arthur Leung</strong> by <a href="https://github.com/Artydabomb">Arthur Leung</a>.
                    </p>

                    <p>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-envelope-square"></i>
                            </span>
                            <span><a href="mailto:arthur.leung3@gmail.com?subject=Reaching Out">arthur.leung3@gmail.com</a></span>
                        </span>
                    </p>

                    <p>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-phone-square-alt"></i>
                            </span>
                            <span>+1 (530)760-6990</span>
                        </span>
                    </p>

                    <span class="icon-text">
                        <span class="icon">
                            <i class="fab fa-linkedin"></i>
                        </span>
                        <span><a href="https://www.linkedin.com/in/afyleung">Arthur Leung</a></span>
                    </span>
                </div>
            </footer>
        </div >
    );
}

export default Footer