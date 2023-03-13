import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineCloudUpload } from "react-icons/ai";
import React from "react";
import { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";

function TaskCard({ tareaHecha, task, updateTask }) {
  const [upDateValidate, setUpDateValidate] = useState(false);
  const [newName, setNewName] = useState("");

  return (
    <Box>
    <Box
    
      mb={"25px"}
      border="1px solid black"
      p="10px"
      display="flex"
      width="100%"
      justifyContent="space-between"
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        flexDirection={"column"}
      >
        <label className={task.label}>
          <b>{task.name}</b>
        </label>
        <Box display="flex" width="100%" gap="10px">
          {task.description}
          <div className="btn"></div>
        </Box>
      </Box>
      <Box gap={"10px"} display="flex">
        <Box display="flex" justifyContent={"center"} alignContent="center">
          <input
            type="checkbox"
            onClick={(e) => {
              /* toggeletask(task) */
              tareaHecha(task.name);
            }}
            checked={task.done}
            readOnly
          />
        </Box>

        <Button
          type="submit"
          id="editar"
          onClick={(e) => {
            /* e.preventDefault(); */
            if (!upDateValidate) {
              setUpDateValidate(true);
            } else {
              setUpDateValidate(false);
            }
          }}
        >
          <AiOutlineEdit />
        </Button>
      </Box>
      {upDateValidate ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={"10px"}
        >
          <Box>
            <Input
              w={"15vw"}
              type="text"
              defaultValue={task.name}
              onChange={(e) => {
                /* e.preventDefault(); */
                setNewName(e.target.value);
                console.log(e.target.value);
              }}
            />
          </Box>
          <Box>
            <Button
              background={"#028f76"}
              variant="solid"
              type="submit"
              onClick={(e) => {
                /*  e.preventDefault(); */
                updateTask(task.name, newName);
              }}
            >
              <AiOutlineCloudUpload />
            </Button>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
    </Box>
  );
}

export default TaskCard;
