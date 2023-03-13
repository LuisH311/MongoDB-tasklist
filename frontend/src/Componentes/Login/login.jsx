import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogueRequest } from "../../configuration/axios";
import { useAuthStore } from "../../configuration/zustand";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import "./login.css";
export default function Login() {
  const navigate = useNavigate();
  const setProfileAuth = useAuthStore((state) => state.setProfile);
  const [inputs, setInputs] = useState({
    usuario: "",
    password: "",
  });
  const onChangue = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await LogueRequest(inputs);
    console.log(data);
    setProfileAuth(data.data);
    if (data.data?.usuario !== null) {
      console.log("listo");
      navigate("/home");
    }
  };
  return (
    <>
      <div className="contenedor">
        <Heading >Login </Heading >
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            <div className="ico">
              <FaUserAlt className="icons" />
            </div>
            <input
            className="input"
              name="usuario"
              type="text"
              placeholder="Enter Username"
              onChange={onChangue}
            />
          </label>
          <label className="label">
            <div className="ico">
              <RiLockPasswordLine className="icons" />
            </div>
            <input
            className="input"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={onChangue}
            />
          </label>
          <Button
          className="boton"
          mt={"30px"}
            colorScheme={"facebook"}
            type="submit"
            value="Login"
          >
            Login
          </Button>
        </form>
      </div>
   
    </>
  );
}
