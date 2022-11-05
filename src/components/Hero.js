import React from 'react'
import '../App.scss'
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
      <div className="hero-page">
        <img src="./logo.png" alt='' />
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <Link to="/questions">
          <button classname="hero-btn">Start Quiz</button>
        </Link>
      </div>  
    );
}
