import React from "react";
import asombrado from "../img/asombrado.gif";

function Nosotros() {
  return (
    <div className="nosotros">
      <div className="subNosotros">
      <h1 className="h1">Acerca de Nosotros</h1>
      <article>
      <br />
      <h3><b>¿Qué es mi producto y para que sirve? </b></h3><br></br>
      <p>Es un aplicativo de gestión de tarea con una estructura sencilla, se ha diseñado para el facil manejo y para ser mas organizado con sus deberes diarios.</p>

      <br/>
      <h3><b>¿Cuáles son las funcionalidades más importantes y porque los usuarios las usarían? </b></h3> <br />
      <p>El aplicativo tiene las funciones de agregar, editar, mostrar y eliminar; esta lista de tareas te va permitir liberar tu carga mental de todos los que haceres que se deben hacer</p> 
       <p> y que por lo tanto te va permitir monitorear tu rendimiento y tus avances.</p>
      <div className="nota1">
      <img src={asombrado} className="nota"/>
      </div>
      </article>
      </div>
    </div>
  );
}

export default Nosotros;
