import React from "react";
import { Container, Title, Image } from "./styles";

function Header() {
  return (
    <Container>
      <Image src={require("../../assets/images/lojabba.jpg")} />
      <Title>LOJA ABBA</Title>
    </Container>
  );
}

export default Header;
