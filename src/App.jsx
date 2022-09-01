import Home from "./Home";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Editor from "./components/Editor/Editor";
import Body from "./components/Body/Body";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
