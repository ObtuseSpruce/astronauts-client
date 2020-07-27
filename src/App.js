import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Content from './content/Content'


function App() {

  return (
    <Router>
        <Content />
    </Router>
  );
}

export default App;
