import {
  Button,
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
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ModalUpdate = ({ isOpen, onClose, productData }) => {
  const bgModal = useColorModeValue("#F3F3F1", "hsl(0,0%,10%)");
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent bg={bgModal}>
        <ModalHeader>{productData.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <FormControl>
              <VStack gap={5}>
                <Input
                  value={productData.name}
                  variant={"flushed"}
                  focusBorderColor="#EA553C"
                />
                <Input
                  value={productData.price}
                  variant={"flushed"}
                  focusBorderColor="#EA553C"
                />
                <Input
                  value={productData.image}
                  variant={"flushed"}
                  focusBorderColor="#EA553C"
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
