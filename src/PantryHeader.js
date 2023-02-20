import { Button, Heading, HStack, Box } from "@chakra-ui/react";
import { GiChefToque } from "react-icons/gi";

export const PantryHeader = () => {
  return (
    <HStack w={"full"} align={"center"} justify={"space-between"} pt={6}>
      <HStack spacing={0.5}>
        <GiChefToque size={26} />
        <Heading fontSize={24}>PantryPlates</Heading>
      </HStack>
      <HStack spacing={4}>
        <NavMenuButton label={"About"} />
        <NavMenuButton label={"Support"} />
        <NavMenuButton label={"Contact us"} />
        <Box w={"1px"} h={"18px"} bg={"black"} opacity={0.2} />
        <NavMenuButton label={"Log in"} />
      </HStack>
    </HStack>
  );
};
const NavMenuButton = ({ label, icon }) => {
  return (
    <Button
      variant={"ghost"}
      size={"sm"}
      p={1}
      px={2}
      color={"black"}
      opacity={0.8}
      fontWeight={"semibold"}
      colorScheme={"blackAlpha"}
    >
      {label}
    </Button>
  );
};
