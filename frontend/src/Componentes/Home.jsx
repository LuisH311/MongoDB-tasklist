import { Box } from "@chakra-ui/react";
import React from "react";
import lista1 from "../img/lista1.jpg";

function Home() {
  return (
    <>
      <h1 id="Titulo1">
        <b className="principal">Bienvenidos a mi Aplicativo de Tareas</b>
      </h1>
    <div style={{display:"flex", height:"80%", alignItems:"center", justifyContent:"center",  padding:"15px"}}>
      <img src={lista1} />
      <Box  display={"flex"} justifyContent="flex-end" width={"90%"} background={"white"} borderRadius="14px" opacity={"0.9"}>
        
      <p className="iniciob">Vivimos una realidad acelerada que a veces nos hace tener la sensación de que no podemos llegar a todo.<br></br>
      Realizar una lista de tareas es una forma poderosa de mejorar nuestra gestión del tiempo, ya que nos ayuda a organizar nuestro día y priorizar las actividades.</p>
      
      </Box>


      {/* <h2 id="Titulo"><b>Que Vamos Agendar Hoy?</b></h2> */}
    </div>
    </>
  );
}

export default Home;
