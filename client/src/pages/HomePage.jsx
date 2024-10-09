import { Box, Text, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useProductStore } from "../store/products.js";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";

const HomePage = () => {
  const { allProducts, products } = useProductStore();

  useEffect(() => {
    allProducts();
  }, [allProducts]);

  console.log(products);

  return (
    <Container maxW="1180px" px={10} py={10}>
      <Heading
        letterSpacing={10}
        textAlign={"center"}
        textTransform={"uppercase"}
        as={"h2"}
        fontSize={"2xl"}
      >
        Current <span style={{ color: "#EA553C" }}>Products</span>
      </Heading>
      {!products || !products.length ? (
        <Box textAlign={"center"} py={10} minH="full">
          <Text
            textTransform={"uppercase"}
            fontSize={15}
            letterSpacing={5}
            opacity={0.3}
          >
            No products found
          </Text>
          <Text color={"#EA553C"} py={10}>
            <Link to={"/create-product"}>create a product</Link>
          </Text>
        </Box>
      ) : (
        <Box py={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5}>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Container>
  );
};

export default HomePage;
