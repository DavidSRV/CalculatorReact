import BotonClear from "./components/BotonClear";
import Boton from "./components/Botones";
import Pantalla from "./components/Pantalla";
import { useState } from "react";
import { evaluate } from "mathjs"; // Nos permite evaluar string entre sí.

export default function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    input ? setInput(evaluate(input)) : alert('Por favor ingrese los valores correctos') //Calcula los strings
  };

  const borrarInput = () => {
    setInput("");
  };

  return (
    <div className="App">
      <h1 style={{ color: "white", margin: "50px" }}>Calculadora App</h1>
      <div className="contenedorcalculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>x</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={borrarInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}
