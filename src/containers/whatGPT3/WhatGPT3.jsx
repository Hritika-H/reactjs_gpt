import React from "react";
import './whatGPT3.css';
import {Feature} from '../../components';

const WhatGPT3 = () =>{
    return(
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
            <Feature title="What is GPT-3" text="ChatGPT is a model developed by OpenAI that is designed to interact with users in a conversational way. It is trained to follow an instruction in a prompt and provide a detailed response. It can answer follow-up questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. Usage of ChatGPT is free" />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="Use chatbots to answer a simple query with a single-line response, or as sophisticated as digital assistants. Chatbots automate workflows and free up employees from repetitive tasks."/>
                <Feature title="Knowledge base" text="Use an embeddings-based search to find relevant information from the knowledge base and then feed that information to GPT-3 to generate a response"/>
                <Feature title="Education" text="ChatGPT3 can help reduce the time needed to solve problems and can be used to train individual students on specific tasks or skills"/>
            </div>
        </div>
    )
}

export default WhatGPT3;
