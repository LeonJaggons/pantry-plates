import {
  Button,
  Center,
  Heading,
  VStack,
  Text,
  HStack,
  Box,
  Card,
  Icon,
} from "@chakra-ui/react";
import Colors from "./Colors";
import {
  GiBowlOfRice,
  GiChickenOven,
  GiFoodTruck,
  GiSaltShaker,
  GiThumbUp,
} from "react-icons/gi";
import { PantryHeader } from "./PantryHeader";
import SearchPane from "./SearchPane";

function App() {
  return <Box>{false ? <HomePage /> : <SearchPane />}</Box>;
}
function HomePage() {
  return (
    <Box>
      <VStack
        bg={Colors.Green}
        px={10}
        paddingX={"5%"}
        borderBottomWidth={3}
        borderBottomColor={`darken(${Colors.Green}, "120%")`}
      >
        <PantryHeader />
        <Center py={10} maxW={"1400px"}>
          <VStack spacing={16} textAlign={"center"} pt={10}>
            <Heading
              size={"3xl"}
              color={"black"}
              // opacity={0.8}
              fontWeight={800}
              lineHeight={1.2}
            >
              <span style={{ opacity: 1 }}>
                Find your perfect recipe<br></br>
              </span>
              <span style={{ opacity: 1 }}>with help from your pantry</span>
            </Heading>
            <Box w={"80%"}>
              <Text color={"black"} opacity={0.5} fontWeight={400} pb={2}>
                Ad officia laborum anim occaecat deserunt laboris culpa pariatur
                anim duis. Nulla sint exercitation ex aute commodo. Velit do
                deserunt dolore mollit.
              </Text>
            </Box>
            <Button
              w={"full"}
              bg={Colors.Buff}
              color={"white"}
              size={"lg"}
              colorScheme={"blackAlpha"}
              py={10}
            >
              <HStack>
                <VStack>
                  <Text>Get Started</Text>
                  <Text fontWeight={400} fontSize={14}>
                    Find your perfect dish today
                  </Text>
                </VStack>
              </HStack>
            </Button>
          </VStack>
        </Center>
      </VStack>
      <VStack alignSelf={"center"}>
        <VStack alignItems={"center"} maxW={"1400px"} pt={6} height={"9000px"}>
          <HStack justify={"space-around"} w={"full"} spacing={6}>
            <StatisticCard
              label={"recipes to choose from"}
              value={"10 million"}
              icon={GiChickenOven}
            />
            <StatisticCard
              label={"global ingredients"}
              value={"50,000"}
              icon={GiSaltShaker}
            />
            <StatisticCard
              value={"20 million"}
              label={"pantry platers served"}
              icon={GiThumbUp}
            />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

const StatisticCard = ({ value, label, icon }) => {
  return (
    <Card p={6} px={8} bg={"whiteAlpha.500"}>
      <HStack w={"full"} spacing={5}>
        <VStack spacing={1} align={"start"} flex={1}>
          <Heading
            fontSize={40}
            fontWeight={800}
            letterSpacing={-1}
            color={"blackAlpha.800"}
          >
            {value}
          </Heading>
          <Text fontSize={14} fontWeight={400} color={"blackAlpha.500"}>
            {label}
          </Text>
        </VStack>
        <Center p={5} bg={"whiteAlpha.500"} borderRadius={"full"} shadow={"md"}>
          <Icon as={icon} boxSize={10} />
        </Center>
      </HStack>
    </Card>
  );
};

export default App;
