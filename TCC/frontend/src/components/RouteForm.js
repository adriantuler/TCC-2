import React, { useState } from 'react';
import axios from 'axios';

function RouteForm() {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [waypoints, setWaypoints] = useState('');
  const [fuelConsumption, setFuelConsumption] = useState('');
  const [travelTime, setTravelTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRoute = {
      startLocation,
      endLocation,
      waypoints: waypoints.split(','),
      fuelConsumption,
      travelTime
    };
    try {
      await axios.post('/api/routes', newRoute);
      alert('Rota criada com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao criar rota');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Local de Início" value={startLocation} onChange={(e) => setStartLocation(e.target.value)} required />
      <input type="text" placeholder="Local de Destino" value={endLocation} onChange={(e) => setEndLocation(e.target.value)} required />
      <input type="text" placeholder="Pontos de Parada (separados por vírgula)" value={waypoints} onChange={(e) => setWaypoints(e.target.value)} />
      <input type="number" placeholder="Consumo de Combustível" value={fuelConsumption} onChange={(e) => setFuelConsumption(e.target.value)} required />
      <input type="number" placeholder="Tempo de Viagem" value={travelTime} onChange={(e) => setTravelTime(e.target.value)} required />
      <button type="submit">Criar Rota</button>
    </form>
  );
}

export default RouteForm;