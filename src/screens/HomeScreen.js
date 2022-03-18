import React from "react";
import {
  Button,
  Container,
  Parrafo,
  Subtitle,
  TextButton,
  Title,
} from "./styles";

function HomeScreen() {
  return (
    <Container>
      <Title>Bienvenid@!</Title>
      <Parrafo>
        Sientase a gusto, está en el sitio oficial de Loja Abba.
      </Parrafo>
      <Container>
        <Subtitle>Catalogo</Subtitle>
        <Parrafo>
          Si voce estiver interesado adquirir algun produto da nossa loja es so
          clickar no butao para ver a lista
        </Parrafo>
        <Button>
          <TextButton>Catalogo</TextButton>
        </Button>
      </Container>
    </Container>
  );
}

export default HomeScreen;
