import React from "react";
import { Content, Container } from "./style";

const DefaultLayout: React.FC = ({ children }) => (
  <Content>
    <Container>{children}</Container>
  </Content>
);
export default DefaultLayout;
