export default function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <div
      className={`botonContenedor ${
        esOperador(props.children) ? "operador" : null
      }`.trim()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
}
