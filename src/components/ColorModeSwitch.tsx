import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { Icon, Box, Flex, Button } from "@chakra-ui/react";
import { FaMoon, FaSun, FaCloud } from "react-icons/fa";
import { useState } from "react";

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

  const { toggleColorMode, colorMode } = useColorMode();

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

      <Switch
        colorScheme={"green"}
        //size="md"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>

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
    </HStack>
  );
};

export default ColorModeSwitch;
