import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Hero } from './components/Hero'
import { Questions } from './components/Questions'
import './App.scss';

const App = () => {
  return <Routes>
      <Route path="/" element={<Hero />} />
      <Route path='/questions' element={<Questions />} />
  </Routes>
}
export default App;