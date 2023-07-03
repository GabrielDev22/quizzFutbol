import "./QuizzDyBalaComponent.css";
import {useState, useEffect } from "react";
import preguntasDyBala from "./preguntasDyBala";

export const QuizzDyBalaComponent = () => {

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinishe, setIsFinishe] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(50);
  const [areDisable, setAreDisable] = useState(false);

  const handleAnswerSubmit = (isCorrect, e) => {
    if(isCorrect) setPuntuacion(puntuacion + 1);

    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      if(preguntaActual === preguntasDyBala.length - 1){
        setIsFinishe(true);
      }else{
        setPreguntaActual(preguntaActual + 1);
      }
    }, 1500);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if(tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if(tiempoRestante === 0) setAreDisable(true);
    }, 1000);
    return () => clearInterval(intervalo);

  },[tiempoRestante]);

  if(isFinishe) return(
    <div className="containerQuizz">
        <div className="juego-terminado">
          <div className="subcontenedor">
            <span className="puntuacionObtenida">Obtuviste {puntuacion} de {preguntasDyBala.length}{" "}</span>
            <button className="botonReinicio" onClick={() => window.location.href="/soccerWorld"}>Volver a Jugar { " "}</button>
          </div>
        </div>
    </div>
  )

  return (
    <div className="containerQuizz">
    <div className="interruptorDeCambio">
      <div className="numero-pregunta">
          <span className="numeroPregunta">Pregunta {preguntaActual + 1} de {preguntasDyBala.length} </span> 
      </div>
      <h2 className="tituloPregunta">{preguntasDyBala[preguntaActual].titulo}</h2>

      <div className="lado-derecho">
            {preguntasDyBala[preguntaActual].opciones.map((respuesta) =>(
              <button className="eleccionQuizz" disabled={areDisable} key={respuesta.textoRespuesta} onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}>{respuesta.textoRespuesta}</button>
            ))}
        </div>

          <div className="contenedorTiempoRestante">{!areDisable ? (
              <span className="tiempoRestante">Tiempo restante:{tiempoRestante}{" "}</span>
          ) : (
            <button className="botonContinuar" onClick={() => {
              setTiempoRestante(10);
              setAreDisable(false);
              setPreguntaActual(preguntaActual + 1);
            }}>Continuar</button>
          )}
          </div>

      </div>
    </div>
  )
}

