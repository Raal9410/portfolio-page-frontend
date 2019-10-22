import React, {Component} from 'react'
import './home.css'
import Particles from 'react-particles-js'

class Home extends Component{
    render(){
        return(
			<div className="homepage">
            <Particles
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
	}} />
	</div>
        )
    }
}

export default Home