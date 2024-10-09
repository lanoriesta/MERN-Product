import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const ProductCard = ({ product }) => {
  return (
    <Box
      boxShadow={"md"}
      overflow={"hidden"}
      bg={useColorModeValue("rgba(238,238,238,0.6)", "hsl(0,0%,10%)")}
      borderRadius={"md"}
      transition={"all 0.3s ease-in-out"}
      _hover={{
        transform: "scale(1.1, 1.1)",
        shadow: "xs",
      }}
    >
      <Image
        borderTopRadius={"md"}
        src={product.image}
        alt={product.name}
        w={"full"}
        h={40}
        objectFit={"cover"}
      />
      <Box p={5}>
        <Heading
          as={"h3"}
          fontSize={18}
          pb={2}
          fontWeight={"light"}
          letterSpacing={2}
        >
          {product.name}
        </Heading>
        <Text opacity={0.5}>$ {product.price}</Text>
      </Box>
      <Box boxShadow={"inner"}>
        <HStack spacing={0}>
          <IconButton
            boxShadow={"none"}
            borderRadius={"none"}
            icon={<EditIcon />}
            color={"white"}
            bg={"#EA553C"}
            _hover={{ bg: "#c04129" }}
            w={"full"}
            m={0}
          />
          <IconButton
            boxShadow={"none"}
            borderRadius={"none"}
            icon={<DeleteIcon />}
            bg={"gray"}
            color={"white"}
            _hover={{ bg: "#737373" }}
            w={"full"}
            m={0}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
