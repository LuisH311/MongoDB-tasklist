import "./App.css";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Apps from "./Tasksito";
import Nosotros from "./Componentes/Nosotros";
import ToggleMode from "./Componentes/ToggleMode";
import esquina from "../src/img/esquina.jpg";
import { Provider } from "react-redux";
import { store } from "./configuration/redux-config";
import { GrHomeRounded } from "react-icons/gr";
import { GrNotes } from "react-icons/gr";
import { GrGroup } from "react-icons/gr";
import Login from "./Componentes/Login/login";
import Nav from "./Nav";

function App() {
  const Home = lazy(() => import("./Componentes/Home"));
  const About = lazy(() => import("./Componentes/About"));
  const Contact = lazy(() => import("./Componentes/Nosotros"));

  return (
    <>
      
        <BrowserRouter>
        <div className="App">
          <div className="containerrr">
            <Nav />
            <Suspense fallback={<p> cargando...</p>}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="about" element={<Apps />} />
                <Route path="nosotros" element={<Nosotros />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
