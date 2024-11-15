import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RouteList() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get('/api/routes');
        setRoutes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoutes();
  }, []);

  return (
    <div>
      <h2>Rotas Criadas</h2>
      <ul>
        {routes.map((route) => (
          <li key={route._id}>
            {route.startLocation} - {route.endLocation} (Consumo: {route.fuelConsumption}L, Tempo: {route.travelTime}min)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RouteList;