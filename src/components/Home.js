import React from "react";
import Nav from "./Nav";
import CardGridComp from "../components/categories/";
import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 90vw;
  }
`;

export default function Home({ title }) {
  return (
    <AppContainer>
      <CardGridComp />
    </AppContainer>
  );
}
