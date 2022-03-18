import React from "react";
import { Product } from "../Product";

import { Container, Wrapper } from "./styles";

export function Layout() {
  return (
    <Container>
      {/* container do geral da página */}
      {/* <Header /> */}
      <Wrapper>
        {/* container do produto */}
        <Product />
      </Wrapper>
      {/* <Footer /> */}
    </Container>
  );
}
