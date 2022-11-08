import React from 'react'
import '../App.scss'
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
      <div className="hero-page">
        <img src="./logo.png" alt='' />
        <h1>Quizzical</h1>
        <p>Answer the questions and test your knowledge!</p>
        <Link to="/quiz">
          <button classname="hero-btn">Start Quiz</button>
        </Link>
        <footer>Developed by&nbsp;
				<a href="https://github.com/AllenPayne17" target="_blank" rel="noreferrer">
					 Allen Spayne
				</a>
			</footer>
      </div>  
    );
}
