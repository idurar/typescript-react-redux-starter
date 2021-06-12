import styled from "styled-components";

export const Nav = styled.nav`
  background: #eee;
  width: 60px;
  min-height: 100vh;
  float: left;
  position: static;
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
  border: 1px solid #ccc;

  height: 46px;
  cursor: pointer;

  border-radius: 6px;
  position: relative;
  &:hover {
    svg {
      fill: #333;
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
