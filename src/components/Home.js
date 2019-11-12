import React, {Component} from 'react'
import './home.css'
import Particles from 'react-particles-js'
import Typist from 'react-typist'

class Home extends Component{
    render(){
        return(
			<div className="homepage">
            {/* <Particles className="particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}  />
	<h1 className="titlehome">Raul hernandez</h1> */}
	<div className="type-text">	
	<Typist>
  <span className="my-custom-class"> Raul Hernandez </span>
  <br />
  <div className="container">
    <p> I'm a Full-Stack web developer, passionate about music, videogames and food. </p>
  </div>
  Welcome to my portofolio page, feel free to get into the different sections.
</Typist>
	</div>
	</div>
        )
    }
}

export default Home