import styled from "styled-components";

export const Nav = styled.nav`
  background-image: linear-gradient(0deg, #018382, #259cd4);
  width: 60px;
  min-height: 100vh;
  float: left;
  position: fixed;
  z-index: 999;
  overflow: hidden;
  top: 0;
`;
export const MenuUl = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const MenuList = styled.li`
  display: inline-block;
  padding: 10px;
  margin: 4px 8px;

  height: 46px;
  cursor: pointer;

  border-radius: 6px;
  position: relative;
  &.active {
    border: 1px solid #fff;
  }
  &:hover {
    border: 1px solid #fff;
    background: #fff;
    svg {
      fill: #259cd4;
    }
  }
  a {
    text-decoration: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
  }
  a.active {
    border: 1px solid #fff;
    border-radius: 6px;
  }
  svg {
    width: 24px;
    fill: #ffffff;
    margin-top: 4px;
  }
  span {
    opacity: 0;
    visibility: hidden;
    color: #fff;
    padding-left: 40px;
    padding-top: 5px;
    height: 20px;
    width: 275px;
  }
`;
