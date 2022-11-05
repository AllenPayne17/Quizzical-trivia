import React from "react";
import { Quiestions } from "./Questions";
import "../App.scss";

export const Quizpage = (props) => {

    const question = props.posts.map(item => {

        const incorrectAnswer = item.incorrect_answers
        const items = [item.correct_answer, ...incorrectAnswer]
    
        const choices = items
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        
        return (
          <Quiestions
            key = {props.posts.indexOf(item)}
            question = {item.question}
            correctAnswer = {item.correct_answer}
            choices = {choices}
           />
        );
      })

    return (
    <div className="quiz-page">
        {question}
        <div className="check-btn">
            <button>Check answers</button>
        </div>
    </div>
    );
}