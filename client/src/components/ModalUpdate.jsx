import {
  Button,
  Heading,
  FormControl,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useProductStore } from "../store/products";

const ModalUpdate = ({ isOpen, onClose, productData }) => {
  const bgModal = useColorModeValue("#F3F3F1", "hsl(0,0%,10%)");
  const [updatedProduct, setUpdatedProduct] = useState(productData);
  const { updateProduct } = useProductStore();
  const toast = useToast();

  const handleUpdateProduct = async (id, product) => {
    const { success, message } = await updateProduct(id, product);
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
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={"lg"}
      motionPreset="slideInBottom"
    >
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent bg={bgModal}>
        <ModalHeader py={10}>
          <Heading
            as={"h1"}
            fontSize={"2xl"}
            textAlign={"center"}
            textTransform={"uppercase"}
            letterSpacing={10}
          >
            Update <span style={{ color: "#EA553C" }}>Product</span>
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <FormControl>
              <VStack gap={5}>
                <Input
                  px={3}
                  variant={"flushed"}
                  focusBorderColor="#EA553C"
                  value={updatedProduct.name}
                  name="name"
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  px={3}
                  type="number"
                  variant={"flushed"}
                  focusBorderColor="#EA553C"
                  name="price"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                />
                <Input
                  px={3}
                  variant={"flushed"}
                  focusBorderColor="#EA553C"
                  name="image"
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                />
              </VStack>
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <HStack>
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
              onClick={() =>
                handleUpdateProduct(productData._id, updatedProduct)
              }
            >
              Update
            </Button>
            <Button
              onClick={onClose}
              w={"full"}
              p={7}
              colorScheme={"gray"}
              my={3}
              color={"white"}
              boxShadow={"base"}
            >
              Cancel
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalUpdate;
