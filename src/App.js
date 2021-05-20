import React from "react";
import Container from "@material-ui/core/Container";
import Album from "./components/Projects";
import Header from "./components/Header";

function App() {
  return (
    <Container component="span" m={1}>
      <div>
        <Header />
        <Album />
      </div>
    </Container>
  );
}

export default App;
