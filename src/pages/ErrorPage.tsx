import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops..</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Page Does not Exist"
            : "An unknown error occurred"}
        </Text>
      </Box>
    </div>
  );
};

export default ErrorPage;
