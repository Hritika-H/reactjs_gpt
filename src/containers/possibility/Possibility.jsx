import React from "react";
import './possibility.css';
import possibility_img from '../../assets/possibility.png';

const Possibility = () =>{
    return(
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibility_img} alt="possibility"/>
            </div>
            <div className="gpt3__possibility-content">
                <h4>Build Something amazing with GPT-3</h4>
                <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
                <p>GPT-3 has the potential to revolutionize the way we interact with technology. Its robust and flexible natural language processing capabilities have the potential to unlock new possibilities.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
            
        </div>
    )
}

export default Possibility;
