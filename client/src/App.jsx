import { useState } from "react";
import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("#faf9f6", "#141414")}>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/create-product" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
