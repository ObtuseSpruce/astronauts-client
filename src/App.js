import React, {useState} from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import Content from './content/Content'


function App() {
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <Router>
        <Content handleLogout={handleLogout} setUser={setUser} user={user} />
    </Router>
  );
}

export default App;
