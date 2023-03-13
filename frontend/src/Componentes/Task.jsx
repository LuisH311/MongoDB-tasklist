import { useState } from "react";
import TaskList from "./TaskList";
import { useEffect } from "react";
import TaskCard from "./TaskCard";
import { Box, Button, Input, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import {
  useDeleteTareasMutation,
  useGetTareasQuery,
  usePutTareasMutation,
} from "../configuration/create-api";
import { useAuthStore } from "../configuration/zustand";
import Comfirmaciones from "./Comfirmaciones";

function Task() {
  const profileAuth = useAuthStore((state) => state.profile);
  const [taskItems, setTaskItems] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [descripcion, setDescripcion] = useState("");
  const [indexConfirm, setIndexConfirm] = useState("");
  const [tarea, setTarea] = useState("");
  const [taskdes, settaskdes] = useState("");
  const [abriractualizar, setAbirActualizar] = useState(false);
  const [indexEditar, setIndexEditar] = useState("");
  const {
    data: datos,
    isError,
    error: ErrorData,
    isSucess,
  } = useGetTareasQuery(profileAuth.token);
  console.log(datos);
  const [actualizarTarea] = usePutTareasMutation();
  const actualizar = async (_id, tarea, descripcion) => {
    const data = await actualizarTarea({
      _id,
      actualizarTaks: { tarea: tarea, descripcion: descripcion },
      token: profileAuth.token,
    });
  };
  const [deleteTaks] = useDeleteTareasMutation();

  const deleteTarea = (_id) => {
    deleteTaks({ _id, token: profileAuth?.token });
  };
  return (
    <Box width="100%" display={"flex"} justifyContent="center">
      <TaskList />
      <>
        {datos == "" ? (
          <>no tienes tareas</>
        ) : (
          <Box
            maxWidth={"100%"}
            display="grid"
            flexDirection="column"
            gridTemplateColumns={"repeat(auto-fill, 370px)"}
            justifyItems="center"
            alignItems="center"
            gap="10px"
            overflowY={"auto"}
            padding="10px"
            margin={"24px"}
          >
            {datos?.map((task, i) => {
              return indexEditar == task._id && abriractualizar ? (
                <Box
                  key={i}
                  display={"flex"}
                  justifyContent="space-between"
                  flexDirection={"column"}
                  border="1px solid #000"
                  p="10px"
                  width={"100%"}
                  borderRadius={"8px"}
                  gap={"10px"}
                  
                >
                  <Box display="flex" width={"100%"} flexDirection="column">
                    <Text fontWeight={"bold"}>Nombre:</Text>
                    <Input
                      name="tarea"
                      value={tarea}
                      onChange={(e) => {
                        e.preventDefault();
                        setTarea(e.target.value);
                      }}
                    ></Input>
                  </Box>
                  <Box display="flex" width="100%" flexDirection="column">
                    <Text fontWeight={"bold"}>Descripción:</Text>
                    <Textarea
                      name="descripcion"
                      value={descripcion}
                      onChange={(e) => {
                        e.preventDefault();
                        setDescripcion(e.target.value);
                      }}
                    />
                  </Box>
                  <Box display={"flex"} justifyContent={"end"} gap="10px">
                    <Button
                      onClick={() => {
                        setAbirActualizar(!abriractualizar);
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      colorScheme={"facebook"}
                      onClick={() => {
                        setAbirActualizar(!abriractualizar);
                        actualizar(task._id, tarea, descripcion);
                      }}
                    >
                      Guardar
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box
                  key={i}
                  display={"flex"}
                  justifyContent="space-between"
                  flexDirection={"column"}
                  border="1px solid #000"
                  border-borderRadius={5}
                  p="10px"
                  width={"100%"}
                  borderRadius={"8px"}
                  gap={"10px"}
                  background={"white"}
                  color={"black"}
                  opacity="0.9"
                >
                  <Box display="flex" width={"100%"} flexDirection="column">
                    <Text fontWeight={"bold"}>Nombre:</Text>
                    <Text>{task.tarea}</Text>
                  </Box>
                  <Box display="flex" width="100%" flexDirection="column">
                    <Text fontWeight={"bold"}>Descripción:</Text>
                    <Text>{task.descripcion}</Text>
                  </Box>
                  <Box display={"flex"} justifyContent={"end"} gap="10px">
                    <Button
                      colorScheme={"red"}
                      onClick={() => {
                        onOpen()
                        setIndexConfirm(task._id)
                          
                        
                      }}
                    >
                      Borrar
                    </Button>
                    <Button
                      colorScheme={"facebook"}
                      onClick={(e) => {
                        e.preventDefault();
                        setIndexEditar(task._id);
                        setAbirActualizar(!abriractualizar);
                        setDescripcion(task.descripcion);
                        setTarea(task.tarea);
                      }}
                    >
                      Editar
                    </Button>
                  </Box>
                  {onOpen ? (
                    <>
                    { indexConfirm == task._id ? (
                      <Comfirmaciones isOpen={isOpen} onClose={onClose} deleteTarea={deleteTarea} indexConfirm={indexConfirm}/>
                    ):null}
                    </>
                  ):null}
                </Box>
              );
            })}
          </Box>
        )}

        {/* <Box display={"flex"} justifyContent={"end"}>
          <Button id="Clear">Limpiar</Button>
        </Box> */}
      </>
    </Box>
  );
}

export default Task;
