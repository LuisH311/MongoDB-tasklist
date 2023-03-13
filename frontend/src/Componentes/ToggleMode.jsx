import { Box, Button, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { BsLightbulb, BsLightbulbOff, BsLightbulbOffFill } from "react-icons/bs";
export default function ToggleMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display={"flex"} alignItems="center">
      <Switch
        onChange={toggleColorMode}
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        m="10px"
        background={"none"}
      ></Switch>
      {colorMode === "light" ? <BsLightbulbOffFill /> : <BsLightbulb />}
    </Box>
    
  );
}
