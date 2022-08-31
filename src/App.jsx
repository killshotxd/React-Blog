import React, { useEffect, useState } from "react";
import Home from "./Home";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Editor from "./components/Editor/Editor";
import Body from "./components/Body/Body";
import PostBody from "./components/PostBody/PostBody";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Editor />} />
          <Route path="/post" element={<PostBody />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
