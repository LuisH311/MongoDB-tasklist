import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./configuration/redux-config";
import "./index.css";
import theme from "./theme";
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <Provider store={store}>
      <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
      </ChakraProvider>
  </Provider>
);
