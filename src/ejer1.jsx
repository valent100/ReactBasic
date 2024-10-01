import './App.css'
// 1 EJERCICIO
// Crea un componente funcional llamado Saludo que acepte un prop nombre y muestre un mensaje de saludo
function Saludo({nombre}) {
  return <h1>Hola, {nombre}</h1>

}

function AppSaludo() {
  return (
    <div>
      <Saludo nombre="Valentina" />
    </div>

  )

}

export default AppSaludo;

