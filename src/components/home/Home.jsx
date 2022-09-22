import React from "react";
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const contactPage = () => {
        navigate('/contact')
    }
    return (
        <div className="main">
            <div className="container">
                <div className="infoContainer">
                    <div className="detail">
                        <div className="hello">Hi I am</div>
                        <div className="name">Rahul Gandhi</div>
                        <div className="about">Full Stack Web Developer</div>
                        <div className="moreabout">I am a good developer, and I live in Indore</div>
                        <div className="buttons">
                            <button onClick={contactPage}>Contact Me</button>
                        </div>
                    </div>
                    <div className="devPic" >
                        <img src="./background.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;