import React from "react";
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData=[
{
    title: 'Improving trusts instantly',
    text: 'Galvanizing around trust and transparency. Acting with integrity and courage. Explained thought process behind important decisions.',
},
{
    title: 'Become frequently active',
    text: 'By keeping up with the trends and adapting accordingly, businesses can become active and tend to be successful. ',
},
{
    title: 'Message and Content Creation',
    text: 'Leverage the power of ChatGPT for various content creation tasks and optimize your processes and attract more customers.',
},
{
    title: 'Real intelligence with ethics',
    text: 'We take the responsibility of ChatGPT to ensure that its use is in compliance with the law and ethical considerations.',
}
];

const Features = () =>{
    return(
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map(
                    (item,index)=>(<Feature title={item.title} text={item.text} key={item.title+index} />)
                                 )
                }

            </div>
        </div>
    )
}

export default Features;