import { GrAdd } from "react-icons/gr";
import { useState } from "react";
import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react";
import { usePostTareasMutation } from "../configuration/create-api";
import { useAuthStore } from "../configuration/zustand";

function TaskList({onClose, isOpen}) {
  const [tarea, setTarea] = useState("");
  const profileAuth = useAuthStore((state) => state.profile);
  const [descripcion, setDescripcion] = useState("");
  const [crearTask] = usePostTareasMutation();
  const Submit =  (e) => {
    e.preventDefault();
    const tarea = e.target.tarea.value;
    const descripcion = e.target.descripcion.value;
     crearTask({
      crearTarea:{tarea,descripcion},
      token:profileAuth?.token
    });
    setTarea("");
    setDescripcion("");
    onClose()
  };
  return (
    <>
    
    <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crea tu Tarea</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Box w={"100%"}>
        <form onSubmit={Submit}>
          <Box     
          display = {"flex"}
          flexDirection= "column"
          gap = "10px"
          w={"100%"}
          justify-content = "center">
            <Input
              type="text"
              name="tarea"
              value={tarea}
              placeholder="Agregar Tarea"
              onChange={(e) => setTarea(e.target.value)}
            />
            <Textarea
              type="text"
              name="descripcion"
              value={descripcion}
              placeholder="Agregar Descripción"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"} width="100%">
            <Button type="submit" id="add">
              {/* <GrAdd /> */}
              Guardar
            </Button>
          </Box>
        </form>
      </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
  
    </>
  );
}

export default TaskList;
