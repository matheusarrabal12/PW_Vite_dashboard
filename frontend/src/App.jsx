import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserCard from './components/UserCard';
import UserDetail from './pages/UserDetail';
import './App.css';

function App() { 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/peoples')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error ao buscar usuários:', err));
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <h1>Dashboard de Usuários</h1>
              <p>Total de usuarios: {users.length}</p>
              <div className="user-container">
                {users.map(user => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            </>
          } />
          <Route path="/usuarios/:id" element={<UserDetail users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
