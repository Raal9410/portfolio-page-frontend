import React from 'react'
import {CSSTransition} from 'react-transition-group'

function Projects() {
    return (
        <CSSTransition transitionName="section" transitionEnterTimeOut={300} transitionLeaveTimeout={300}>
        <div className="projects-container">
            <div className="projects">
                <img src="https://res.cloudinary.com/raal9410/image/upload/v1571347278/portfolio-images/pizzaetersimg_tn5zkd.png" alt="NinjaTurtles"/>
                <h3>Pizza Eaters Ninja Turtles</h3>
                <div>
                    <p>1 vs 1 multi-player videogame. Tap the buttons to eat the pizza, who finish it first win.</p>
                    <ul>
                        <li>Javascript</li>
                        <li>Canvas</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
            <div className="projects">
                <img src="https://res.cloudinary.com/raal9410/image/upload/v1571347275/portfolio-images/ironaccess_i3e3iz.png" alt="IronAccess"/>
                <h3>IronAccess</h3>
                <div>
                    <p>Webapp to manage the guest's access to a building, with invitations created by inside people.</p>
                    <ul>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>Handlebars</li>
                        <li>Express.js</li>
                        <li>Passport</li>
                        <li>UIkit</li>
                    </ul>
                </div>
            </div>
            <div className="projects">
                <img src="https://res.cloudinary.com/raal9410/image/upload/v1571347273/portfolio-images/indigo_vfsxud.png" alt="Indigo"/>
                <h3>Indigo</h3>
                <div>
                    <p>Social media style webapp, oriented to musicians to know other musicians by their musical taste on Spotify.</p>
                    <ul>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>Passport</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Spotify Api</li>
                    </ul>
                </div>
            </div>
        </div>
        </CSSTransition>
    )
}

export default Projects