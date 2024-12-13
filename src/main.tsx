import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import theme from "./theme.ts";
import "./index.css";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./routes.tsx";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript
        initialColorMode={theme.config.initinalColorMode}
      ></ColorModeScript>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
