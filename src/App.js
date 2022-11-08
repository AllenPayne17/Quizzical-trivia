import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Menu } from './components/Menu';
import { Quiz } from './components/Quiz';
import './App.scss';

const App = () => {
  
  return (
    <Routes>
        <Route path="/" element={<Menu />} />
        <Route path='/quiz' element={<Quiz />} />
    </Routes>
    );
}
export default App;