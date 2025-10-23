
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Users from './components/Users';
import Teams from './components/Teams';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Workouts from './components/Workouts';
import './App.css';


function App() {
  return (
    <div className="container py-4">
      {/* Navegación Bootstrap con react-router-dom */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <span className="navbar-brand d-flex align-items-center">
          <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="OctoFit Logo" className="App-logo" />
          OctoFit Tracker
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/users">Usuarios</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/teams">Equipos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/activities">Actividades</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
          </ul>
        </div>
      </nav>

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={
          <div>
            <h1 className="display-4 mb-4 text-center">Bienvenido a OctoFit Tracker</h1>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">¿Qué es OctoFit Tracker?</h5>
                <p className="card-text">Una plataforma para registrar actividades, equipos, leaderboard y rutinas de superhéroes. ¡Compite y mejora tu salud!</p>
                <a href="https://reactjs.org" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Aprende React</a>
              </div>
            </div>
          </div>
        } />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
