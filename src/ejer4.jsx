// 4 EJERCICIO
// // Crea un componente Contador que utilice useState para mantener y actualizar un contador
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>más</button>
      <button onClick={() => setCount(count - 1)}>menos</button>
    </div>
  );
}

function AppContador() {
  return <Contador />;
}


export default AppContador;