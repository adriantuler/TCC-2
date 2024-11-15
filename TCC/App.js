import React from 'react';
import RouteForm from './frontend/src/components/RouteForm';
import RouteList from './frontend/src/components/RouteList';

function App() {
  return (
    <div className="App">
      <h1>Otimização de Rotas</h1>
      <RouteForm />
      <RouteList />
    </div>
  );
}

export default App;