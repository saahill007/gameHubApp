import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  const { colorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch
          isChecked={colorMode === "dark"}
          colorScheme="green"
          onChange={toggleColorMode}
        />
        <Text>Dark Mode</Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
