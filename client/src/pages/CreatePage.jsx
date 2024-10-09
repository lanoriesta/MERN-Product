import {
  Container,
  Heading,
  Box,
  VStack,
  Input,
  Button,
  useColorModeValue,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/products.js";

const CreatePage = () => {
  const toast = useToast();
  const { createProducts } = useProductStore();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const addProductHandler = async (e) => {
    e.preventDefault();

    const { success, message } = await createProducts(newProduct);
    if (success) {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
        variant: "left-accent",
      });
    } else {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
        variant: "left-accent",
      });
    }

    setNewProduct({ name: "", price: "", image: "" });

    console.log("Success:", success);
    console.log("Message:", message);
  };

  return (
    <Container maxW="xl" px={10} py={10}>
      <Heading
        as={"h1"}
        fontSize={"2xl"}
        textAlign={"center"}
        textTransform={"uppercase"}
        letterSpacing={10}
      >
        Create <span style={{ color: "#EA553C" }}>Product</span>
      </Heading>
      <Box
        my={5}
        p={8}
        rounded={"lg"}
        bg={useColorModeValue("rgba(238,238,238,.6)", "hsl(0,0%,10%)")}
        boxShadow={"md"}
      >
        <form onSubmit={addProductHandler}>
          <FormControl isRequired>
            <VStack gap={5}>
              <Input
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                name="name"
                value={newProduct.name}
                placeholder="Product Name"
                variant={"flushed"}
                focusBorderColor="#EA553C"
              />
              <Input
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                type="number"
                name="price"
                value={newProduct.price}
                placeholder="Price"
                variant={"flushed"}
                focusBorderColor="#EA553C"
              />
              <Input
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                name="image"
                value={newProduct.image}
                placeholder="Image"
                variant={"flushed"}
                focusBorderColor="#EA553C"
              />
              <Button
                type="submit"
                w={"full"}
                p={7}
                bg={"#EA553C"}
                _hover={{ bg: "#c04129" }}
                variant={"solid"}
                my={3}
                color={"white"}
                boxShadow={"base"}
              >
                Add Product
              </Button>
            </VStack>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePage;
