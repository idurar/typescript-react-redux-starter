import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  top: 10px;
  left: 60px;
  width: calc(100% - 60px);
`;

export const Container = styled.div`
  display: block;
  margin: 20px;
  padding: 20px;
  width: 600px;
  float: left;
  @media only screen and (max-width: 480px) {
    /* For everything smaller than 480px */
    margin: 0;
    width: 100%;
  }
`;
