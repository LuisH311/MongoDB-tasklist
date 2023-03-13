import { Box, Button, useDisclosure } from "@chakra-ui/react";
import TaskList from "./TaskList";

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" gap={"10px"}>

    <h2 id="Titulo">
      <b>Lista de Tareas</b>
    </h2>
    <Box>

    <Button onClick={onOpen}  id="add">Crear Tarea</Button>
    </Box>
    <TaskList isOpen={isOpen} onClose={onClose}/>
    </Box>
  </>
  );
}

export default Header;
