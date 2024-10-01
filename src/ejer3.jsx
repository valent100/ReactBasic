// 3 EJERCICIO
// Crea un componente Contenedor que utilice children props para envolver su contenido en un div con un borde.
function Contenedor({children}) {
  return (
    <div style={{ border: '2px solid black', padding: '20px', margin: '10px'}}>
      {children}
    </div>
  );
}

function AppChildren() {
  return (
    <div>
      <h1>Información</h1>
      
      <Contenedor>
        <p>18 años</p>
        <Contenedor>
        <h2>Valentina</h2>
        <p>Tobón Morales</p>
      </Contenedor>
      </Contenedor>

      
    </div>
  );
}

export default AppChildren;