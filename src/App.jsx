import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { InicioPage } from './pages/Inicio/InicioPage'
import { SoccerWorldPage } from './pages/soccerWorld/SoccerWorldPage'
import { QuizzMessiPage } from './pages/quizMessi/QuizzMessiPage'
import {QuizzDeBruynePage} from "./pages/quizzDeBruyne/QuizzDeBruynePage";
import {QuizzDyBalaPage} from "./pages/quizzDyBala/QuizzDyBalaPage";
import {QuizzHalaandPage} from "./pages/quizzHalaand/QuizzHalaandPage";
import {QuizzMbappePage} from "./pages/quizzMbappe/QuizzMbappePage";
import {QuizzNeymarPage} from "./pages/quizzNeymar/QuizzNeymarPage";
import {QuizzRonaldoPage} from "./pages/quizzRonaldo/QuizzRonaldoPage";
import {QuizzViniciusPage} from "./pages/quizzVinicius/QuizzViniciusPage";

function App() {
  return (
     <Router>
          <Routes>
              <Route path='/' element={<InicioPage />}></Route>
              <Route path='/soccerWorld' element={<SoccerWorldPage />}></Route>
              <Route path='/quizzMessi' element={<QuizzMessiPage />}></Route>
              <Route path='/quizzDeBruyne' element={<QuizzDeBruynePage />}></Route>
              <Route path='/quizzDyBala' element={<QuizzDyBalaPage />}></Route>
              <Route path='/quizzHalaand' element={<QuizzHalaandPage />}></Route>
              <Route path='/quizzMbappe' element={<QuizzMbappePage />}></Route>
              <Route path='/quizzNeymar' element={<QuizzNeymarPage />}></Route>
              <Route path='/quizzCristiano' element={<QuizzRonaldoPage />}></Route>
              <Route path='/quizzVinicius' element={<QuizzViniciusPage />}></Route>
          </Routes>
     </Router>

  )
}

export default App
