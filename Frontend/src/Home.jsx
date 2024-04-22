import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <h1> CRUD Operation </h1>
            <div className="inner">
                <button style={{ "--clr": "#39FF14" }}><span>Create</span><i></i></button>
                <button style={{ "--clr": "#0FF0FC" }}><span>Show</span><i></i></button>
                <button style={{ "--clr": "#FFF01F" }}><span>Upddte</span><i></i></button>
                <button style={{ "--clr": "#FF3131" }}><span>Delete</span><i></i></button>
            </div>

        </div>
    );
};

export default Home;
