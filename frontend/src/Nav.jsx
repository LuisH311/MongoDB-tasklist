import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { GrGroup, GrHomeRounded, GrNotes } from "react-icons/gr";
import { Link } from "react-router-dom";
import ToggleMode from "./Componentes/ToggleMode";
import { useAuthStore } from "./configuration/zustand";

export default function Nav() {
  const profileAuth = useAuthStore((state) => state.profile);
  console.log(profileAuth);

  return (
    <>
      {profileAuth?.usuaries != null ? (
        <nav>
          <ul>
            <ToggleMode />
            <li>
              <Link to="/home" className="a">
                <span className="primero">
                  <GrHomeRounded className="in" />
                </span>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/About" className="a">
                <span className="segundo">
                  <GrNotes className="in" />
                </span>
                Tarea
              </Link>
            </li>
            <li>
              <Link to="/Nosotros" className="a">
                <span className="tercero">
                  <GrGroup className="in" />
                </span>
                Sobre_Nosotros
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <ToggleMode />
            <li >
              <Heading  className="as" >
                {/* Bienvenido */}
              </Heading>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
