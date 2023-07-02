import { Link } from "react-router-dom";
import "./SoccerWorldComponent.css";

export const SoccerWorldComponent = () => {
  return (
    <div>

    <div className="contenedorSoccerWorld">
        <img className="imagenPortadaSoccerWorld" src="img/SoccerWorld/portadaSoccerWorld.avif" alt="" />
        <h1 className="tituloSoccerWorld">¿Entonces si tuviste el valor de entrar?</h1>
        <h2 className="subtituloSoccerWorld">Felicidades ahora ponte a prueba</h2>
        <p className="descripcionDelWorld">Navega atraves de nuestro sitio web y prueba los diferentes Quizz que encontraras a traves de nuestra pagina </p>
    </div>

    <div className="contenedorDeQuizz">
          <h2 className="SubtituloQuizz">World Quizz</h2>

      <div className="subContenedorQuizz">
        <Link style={{textDecoration:'none'}} to='/quizzMessi'>
          <div className="contenidoQuizz">
            <img className="imagenQuizz" src="img/SoccerWorld/messi.jpg" alt="" />
            <p className="nameQuizz">Leo Messi</p>
          </div>
        </Link>

      <Link style={{textDecoration:'none'}} to='/quizzCristiano'>
        <div className="contenidoQuizz">
          <img className="imagenQuizz" src="img/SoccerWorld/cristiano.jpg" alt="" />
          <p className="nameQuizz">Cristiano Ronaldo</p>
        </div>
      </Link>

      <Link style={{textDecoration:'none'}} to='/quizzNeymar'>
        <div className="contenidoQuizz">
          <img className="imagenQuizz" src="img/SoccerWorld/neymar.jpg" alt="" />
          <p className="nameQuizz">Neymar Jr</p>
        </div>
        </Link>

        <Link style={{textDecoration:'none'}} to='/quizzMbappe'>
          <div className="contenidoQuizz">
            <img className="imagenQuizz" src="img/SoccerWorld/mbappe.webp" alt="" />
            <p className="nameQuizz">Mbappe</p>
          </div>
        </Link>

        <Link style={{textDecoration:'none'}} to='/quizzHalaand'>
          <div className="contenidoQuizz">
            <img className="imagenQuizz" src="img/SoccerWorld/haaland.webp" alt="" />
            <p className="nameQuizz">Haaland</p>
          </div>
        </Link>

        <Link style={{textDecoration:'none'}} to='/quizzDeBruyne'>
          <div className="contenidoQuizz">
            <img className="imagenQuizz" src="img/SoccerWorld/DeBruyne.jpg" alt="" />
            <p className="nameQuizz">De Bruyne</p>
          </div>
        </Link>

        <Link style={{textDecoration:'none'}} to='/quizzVinicius'>
          <div className="contenidoQuizz">
            <img className="imagenQuizz" src="img/SoccerWorld/ViniciusJr.jpg" alt="" />
            <p className="nameQuizz">Vinicius Jr</p>
          </div>
        </Link>

        <Link style={{textDecoration:'none'}} to='/quizzDyBala'>
          <div className="contenidoQuizz">
            <img className="imagenQuizz" src="img/SoccerWorld/dybala.webp" alt="" />
            <p className="nameQuizz">Paulo DyBala</p>
          </div>
        </Link>

      </div>
    </div>








    </div>
  )
}
