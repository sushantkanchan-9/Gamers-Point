import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCloud, FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  // Define the three states: "off", "half", "on"
  const [state, setState] = useState("half");

  const toggleState = () => {
    // Cycle through "off" -> "half" -> "on"
    setState((prevState) => {
      if (prevState === "off") return "on";
      if (prevState === "half") return "off";
      return "half";
    });
  };

  // Define which icon to display based on the state
  const renderIcon = () => {
    if (state === "off") return <Icon as={FaMoon} color="gray.400" />;
    if (state === "half") return <Icon as={FaCloud} color="blue.400" />;
    if (state === "on") return <Icon as={FaSun} color="yellow.400" />;
  };

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Flex align="center">
        <Button
          onClick={toggleState}
          size="lg"
          colorScheme="blue"
          variant="ghost"
          px={4}
          rounded="full"
          onChange={toggleColorMode}
        >
          {renderIcon()}
        </Button>
      </Flex>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text display="flex" alignItems="center" whiteSpace="nowrap">
          {colorMode == "dark" ? (
            <>
              <FaMoon style={{ marginRight: "8px" }} />
              Dark Mode
            </>
          ) : (
            <>
              <FaSun
                style={{ marginRight: "8px", color: "yellow.400" }}
                color="#F6E05E"
              />
              Light Mode
            </>
          )}
        </Text>
      </Box>
    </HStack>
  );
};

export default ColorModeSwitch;
