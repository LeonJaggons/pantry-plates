import {
  Box,
  Card,
  Center,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Icon,
  Text,
  VStack,
  SimpleGrid,
  Tag,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Colors from "./Colors";
import {
  IoIosBook,
  IoIosBookmark,
  IoIosHeart,
  IoIosHeartDislike,
  IoIosMore,
  IoIosRefresh,
  IoIosStar,
} from "react-icons/io";
const recipes = require("./recipes.json");
const SearchPane = () => {
  return (
    <Center flex={1} h={"100vh"} bg={"gray.50"}>
      <RecipeChoicePane />
    </Center>
  );
};
const IngredientsPane = () => {
  return (
    <Card p={10} maxW={"70vw"}>
      <VStack w={"full"} spacing={4}>
        <Heading size={"lg"}>What ingredients do you have on hand?</Heading>
        <Input />
      </VStack>
    </Card>
  );
};

const RecipeChoicePane = () => {
  const rs = recipes.recipes.splice(20, 100);
  return (
    <VStack flex={1} maxW={"65vw"} alignSelf={"center"}>
      <Recipe recipe={rs[2]} />
      <HStack w={"full"}>
        <TouchButton icon={IoIosRefresh} color={"yellow"} />
        <TouchButton icon={IoIosHeart} color={"green"} />
        <TouchButton icon={IoIosBookmark} color={"blue"} />
        <TouchButton icon={IoIosHeartDislike} color={"red"} />
        <TouchButton icon={IoIosMore} color={"gray"} />
      </HStack>
    </VStack>
  );
};

const Recipe = ({ recipe }) => {
  const ingredients = recipe.ingredients.map((ingred) => ingred.name);
  const steps = recipe.steps;
  const numSteps = steps.length;
  return (
    <Card borderRadius={0} w={"full"} maxH={"80vh"} overflowY={"scroll"}>
      <Box flex={1}>
        <Image src={recipe.img} w={"full"} />
      </Box>
      <Box flex={1} p={4}>
        <VStack>
          <Heading size={"md"}>{recipe.title}</Heading>
          <Text fontSize={13}>{recipe.description}</Text>
          <SimpleGrid columns={4} spacing={2} w={"full"}>
            {ingredients.map((i) => (
              <Button
                overflowX={"clip"}
                variant={"outline"}
                fontSize={10}
                w={"full"}
                size={"md"}
              >
                {i}
              </Button>
            ))}
          </SimpleGrid>
        </VStack>
        <Box h={30} />
      </Box>
    </Card>
  );
};

const TouchButton = ({ icon, color }) => {
  return (
    <IconButton
      flex={1}
      style={{ aspectRatio: 1 }}
      variant={"solid"}
      bg={"white"}
      borderRadius={"0px"}
      shadow={"lg"}
      icon={<Icon as={icon} color={color && color + ".400"} boxSize={"20px"} />}
    />
  );
};

export default SearchPane;
