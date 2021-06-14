import styled from "styled-components";

export const WhiteBox = styled.div`
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  min-height: 200px;
  overflow: hidden;
  border: 1px solid #e8edff;
  box-shadow: 0 8px 20px 0 rgb(0 163 240 / 5%);
  transition: all 0.3s ease-in-out;
  top: 0px;
  position: relative;
  &:hover {
    box-shadow: 0 8px 20px 0 rgb(0 163 240 / 15%);
    top: -10px;
  }
  img {
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    /* For everything smaller than 480px */
    min-height: 100px;
  }
`;
