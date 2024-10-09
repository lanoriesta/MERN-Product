import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { LightIcon } from "../assets/icons/LightIcon";
import { FaOpencart } from "react-icons/fa6";
import { DarkIcon } from "../assets/icons/DarkIcon";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container color="white" p={5} maxW="1180px">
      <Flex alignItems={"Center"} justifyContent={"space-between"}>
        <Link to={"/"}>
          <Flex alignItems={"center"} gap={4}>
            <FaOpencart color="#EA553C" size={50} />
            <Heading
              color={useColorModeValue("#3B3B3B", "#faf9f6")}
              fontWeight={"light"}
              letterSpacing={5}
            >
              Product App
            </Heading>
          </Flex>
        </Link>

        <Box>
          <Button
            variant={"ghost"}
            mx={1}
            colorScheme={useColorModeValue("blackAlpha", "orange")}
          >
            <Link to={"/create-product"}>
              <PlusIcon theme={useColorModeValue("#141414", "#faf9f6")} />
            </Link>
          </Button>
          <Button
            onClick={toggleColorMode}
            variant={"ghost"}
            mx={1}
            colorScheme={useColorModeValue("blackAlpha", "orange")}
          >
            {colorMode === "light" ? <DarkIcon /> : <LightIcon />}
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
