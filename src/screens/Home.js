import React from "react";
import { Container, Header, Title, Image, Parrafo } from "./styles";

function Home() {
  return (
    <Container>
      <Header>
        <Image src={require("../assets/lojabba.jpg")} />
        <Title>LOJA ABBA</Title>
      </Header>
      <Parrafo>RELLENO</Parrafo>
    </Container>
  );
}

export default Home;
