import "./inicioComponent.css";
import { Link } from "react-router-dom";

export const InicioComponent = () => {
  return (
    <div>
        <div className="portadaExpress">
            <img className="imagenPortadaInicio" src="img/imagenPortada2.jpeg" alt="" />
            <h1 className="tituloIninicio">Bienvenido al mundo del futbol</h1>
            <p className="infoInicio">
                Este espacio fue creado con la intención de poner a pruebas tus habilidades y conocimientos del futbol. Pon a prueba tus conocimientos y favoritimos con los diferentes jugadores y equipos del mundo. ¡Veamos cuanto sabes!
            </p>
            <Link to='/soccerWorld'><button className="botonInicioDeQuizz">Soccer World</button></Link>
        </div>    
    </div>
  )
}
