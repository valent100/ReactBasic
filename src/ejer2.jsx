// 2 EJERCICIO
// Modifica el componente Saludo para que acepte un prop adicional idioma y muestre el saludo en el idioma especificado.
function Saludo({nombre,idioma }) {
  const Traduccion = (idioma) => {
    switch (idioma) {
      case 'Español':
        return 'Hola';
      case 'Ingles':
        return 'Hello';
      case 'Frances':
        return 'Bonjour';
      default:
        return 'Idioma no reconocido';
    }
  };

  return (
    <div>
      <h1>{Traduccion(idioma)}, {nombre}.</h1>
    </div>
  );
}

function AppSaludoIdioma() {
  return (
    <div>
      <Saludo nombre="Valentina" idioma="Español" />
      <Saludo nombre="Valentina" idioma="Ingles" />
      <Saludo nombre="valentina" idioma="Frances" />
    </div>
  );
}

export default AppSaludoIdioma;