
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container py-4">
      {/* Navegación Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="OctoFit Logo" className="App-logo" />
          OctoFit Tracker
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link active" href="#users">Usuarios</a></li>
            <li className="nav-item"><a className="nav-link" href="#teams">Equipos</a></li>
            <li className="nav-item"><a className="nav-link" href="#activities">Actividades</a></li>
            <li className="nav-item"><a className="nav-link" href="#leaderboard">Leaderboard</a></li>
            <li className="nav-item"><a className="nav-link" href="#workouts">Workouts</a></li>
          </ul>
        </div>
      </nav>

      {/* Encabezado Bootstrap */}
      <h1 className="display-4 mb-4 text-center">Bienvenido a OctoFit Tracker</h1>

      {/* Tarjeta Bootstrap */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">¿Qué es OctoFit Tracker?</h5>
          <p className="card-text">Una plataforma para registrar actividades, equipos, leaderboard y rutinas de superhéroes. ¡Compite y mejora tu salud!</p>
          <a href="https://reactjs.org" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Aprende React</a>
        </div>
      </div>

      {/* Tabla de ejemplo Bootstrap */}
      <h2 className="mb-3">Ejemplo de tabla de usuarios</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Equipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Iron Man</td>
            <td>ironman@marvel.com</td>
            <td>Marvel</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Batman</td>
            <td>batman@dc.com</td>
            <td>DC</td>
          </tr>
        </tbody>
      </table>

      {/* Botón Bootstrap */}
      <button type="button" className="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#infoModal">
        Mostrar información
      </button>

      {/* Modal Bootstrap */}
      <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="infoModalLabel">Información</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Este es un ejemplo de modal usando Bootstrap en React.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
