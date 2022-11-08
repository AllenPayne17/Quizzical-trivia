import React, { useEffect, useState } from 'react';
import { Questions } from "./Questions"
import { nanoid } from 'nanoid';
export const Quiz = () => {

    const [questions, setQuestions] = useState([])
    const [checked, setChecked] = useState(false)
    const [count, setCount] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [isready, setReady] = useState(false)
  
    const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)
  
    useEffect(() => {
      async function getQuestion() {
        const res = await fetch('https://opentdb.com/api.php?amount=10&type=multiple&encode=base64')
        const data = await res.json()
        let q = []
        data.results.forEach(question => {
          q.push({ 
            id: nanoid(), 
            question: question.question, 
            correct: question.correct_answer, 
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]), 
            selected: null, 
            checked: false 
          })
        })
        setQuestions(q)
      }
      getQuestion()
    },[count])
    
  function handleCheck(){
    let selected = true
    questions.forEach(question =>{
      if (question.selected == null){
        selected = false
        return
      }
    })
    if (!selected){
      return
    }
    setQuestions(questions => questions.map(question => {
      
      return {...question, checked:true}
    }))
    setChecked(true)
    let correct = 0
    questions.forEach(question =>{
      if (question.correct === question.selected){
        correct += 1
      }
    })
    setCorrect(correct)
  }
  
  
    function handleClickAnswer(id, answer) {
      setQuestions(questions => questions.map(question => {
        return question.id === id ? {...question, selected: answer} : question
      }))
      setReady(true)
    }
  
    function handlePlayAgain(){
      setCount(count => count + 1)
      setChecked(false)
  
    }
  
    const questionList = questions.map(question => {
      return(
        <Questions
          key={question.id}
          q={question}
          id={question.id}
          handleClickAnswer = {handleClickAnswer}
         />
      )
    })

    return(
        <div className='quiz-container'>
            {questionList}
            {isready &&
              <div className='check-container'>
                {checked && <span className='score'>You scored {correct}/5 correct answers</span>}  
                <button className='check' 
                  onClick={checked ? handlePlayAgain : handleCheck}>
                  {checked ? 'Play Again' : 'Check Answer'}
                </button>
              </div>
            }
        </div>
    )

}