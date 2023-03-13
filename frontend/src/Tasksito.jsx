import { Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Task from "./Componentes/Task";

function Apps() {
  return (
    <Box
      w="100%"
      h="93%"
      margin="auto"
    >
      <Box
        
        alignItems="center"
        w="99%"
        height={"99%"}
        bg={""}
        gap="10px"
        borderRadius="5px"
        border="1px solid black"
        margin="auto"
        boxShadow="0px 0px 1px 1px rgb(206 206 206)"
      >
        <Header />
        <Task /* createNewTask ={createNewTask} */ />
        <Footer />
      </Box>
    </Box>
  );
}

export default Apps;
