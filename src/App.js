import React, { useEffect, useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import { Hero } from './components/Hero';
import { Quizpage } from './components/Quizpage';
import './App.scss';
import axios from 'axios';

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10&type=multiple').then((response) => {
      setPosts(response.data.results)
    })
  },[])

  const questions = posts.map(item => {

    const incorrectAnswer = item.incorrect_answers
    const items = [item.correct_answer, ...incorrectAnswer]

    const choices = items
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    
    return (
      <Quizpage
        key = {posts.indexOf(item)}
        question = {item.question}
        correctAnswer = {item.correct_answer}
        choices = {choices}
       />
    );
  })

  return (
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/questions' element={questions} />
    </Routes>
    );
}
export default App;