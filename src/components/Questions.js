import React from "react";
import '../App.scss';
import { nanoid } from "nanoid";

export const Questions = (props) => {
    let answers = props.q.answers

    function handleClick(answer) {
        if(props.q.clicked){
            return
        }
        props.handleClickAnswer(props.id, answer)
    }

    const answerList = answers.map(answer => {
        let id = null
        if (props.q.checked){
            if (props.q.correct === answer){
              id = 'correct'
            }
            else if(props.q.selected === answer){
              id = 'incorrect'
            }
            else{
              id = 'not-selected'
            }
          }
        return(
            <button key={nanoid()} id={id} className={answer === props.q.selected ? "answer selected" : "answer"} onClick={() => handleClick(answer)}>{atob(answer)}</button>
        )
    })
    return (
        <div className="question">
            <p>{atob(props.q.question)}</p>
            <div className="choices">
                {answerList}
            </div>
            <hr/>
        </div>
    );
}