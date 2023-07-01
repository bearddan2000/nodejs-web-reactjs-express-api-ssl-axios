import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Datarow from './component/Datarow';

function App() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const login = btoa("maria:pass");
    axios.get('https://localhost/')
    .then(response => setUsers(response.data))
  }, []);

  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Promise axios api with and ssl json</h1>
        {users.map((user, index) =>
        (
         <Datarow dataFieldId={user.id} dataFieldBreed={user.breed} 
          dataFieldColor={user.color}/>
        ))}
      </header>
    </div>
  );
}

export default App;

