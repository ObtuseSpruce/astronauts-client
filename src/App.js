import React, {useState} from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import Content from './content/Content'


function App() {

  console.log(process.env.REACT_APP_API_KEY)

  return (
    <Router>
        <Content />
    </Router>
  );
}

export default App;
