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
  
  return (
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/quiz' element={<Quizpage posts= {posts} />} />
    </Routes>
    );
}
export default App;