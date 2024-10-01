import './App.css'
// 1 EJERCICIO
// Crea un componente funcional llamado Saludo que acepte un prop nombre y muestre un mensaje de saludo
// function Saludo({nombre}) {
//   return <h1>Hola, {nombre}</h1>

// }

// function Apps() {
//   return (
//     <div>
//       <Saludo nombre="Valentina" />
//     </div>

//   )

// }

// export default Apps;
// // -------------------------------------------------------------------------------------------------------------------------------------
// 2 EJERCICIO
// Modifica el componente Saludo para que acepte un prop adicional idioma y muestre el saludo en el idioma especificado.

// import ReactDOM from 'react-dom/client';

// function Saludo({nombre,idioma }) {
//   const Traduccion = (idioma) => {
//     switch (idioma) {
//       case 'Español':
//         return 'Hola';
//       case 'Ingles':
//         return 'Hello';
//       case 'Frances':
//         return 'Bonjour';
//       default:
//         return 'Idioma no reconocido';
//     }
//   };

//   return (
//     <div>
//       <h1>{Traduccion(idioma)}, {nombre}.</h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Saludo nombre="Valentina" idioma="Español" />
//       <Saludo nombre="Valentina" idioma="Ingles" />
//       <Saludo nombre="valentina" idioma="Frances" />
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// export default Apps;
// ----------------------------------------------------------------------------------------------------------------------------------------
// 3 EJERCICIO
// Crea un componente Contenedor que utilice children props para envolver su contenido en un div con un borde.
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Contenedor({children}) {
//   return (
//     <div style={{ border: '2px solid black', padding: '20px', margin: '10px' }}>
//       {children}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Información</h1>
      
//       <Contenedor>
//         <p>18 años</p>
//         <Contenedor>
//         <h2>Valentina</h2>
//         <p>Tobón Morales</p>
//       </Contenedor>
//       </Contenedor>

      
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// export default App;
// ---------------------------------------------------------------------------------------------------------------------------------------
// 4 EJERCICIO
// // Crea un componente Contador que utilice useState para mantener y actualizar un contador
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function Contador() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Contador: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Incrementar</button>
//       <button onClick={() => setCount(count - 1)}>Decrementar</button>
//     </div>
//   );
// }

// function App() {
//   return <Contador />;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// export default App;