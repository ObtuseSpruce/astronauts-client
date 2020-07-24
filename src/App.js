import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Login from "./content/pages/Login"
import Home from "./content/pages/Home"


function App() {
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setUser(null)
  }

  const Content = () => {
  if (!user) {
    return <Login setUser={setUser} />
  } else {
    return <Home handleLogout={handleLogout} />
  }}

  return (
    <Router>
        <Content />
    </Router>
  );
}

export default App;
