import * as React from "react";
import ReactDOM from "react-dom";

import { ChakraProvider } from "@chakra-ui/react";
import Advice from "./components/Advice";

ReactDOM.render(
  <ChakraProvider>
    <Advice />
  </ChakraProvider>,
  document.getElementById("root")
);
