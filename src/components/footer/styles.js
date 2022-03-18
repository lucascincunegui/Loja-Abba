import styled from "styled-components";
import { green, white } from "../../UI/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${green};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${white};
  font-weight: bold;
  text-align: center;
`;
