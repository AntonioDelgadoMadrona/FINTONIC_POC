// DEPENDENCIES
import React, { memo } from "react";
import { useLocation } from "react-router-dom";

// COMPONENTS
import { Navbar } from "../Navbar/Navbar";

// STYLED
import { Layout as Container, Wrapper } from "./styled";

const Layout = memo((props) => {

  const { pathname } = useLocation();

  return (
    <Container>
      <Navbar />
      <Wrapper path={pathname}>{props.children}</Wrapper>
    </Container>
  );
}
);

export { Layout };
