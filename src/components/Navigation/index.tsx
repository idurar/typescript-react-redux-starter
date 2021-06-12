import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { category } from "../../redux/category/actions";
import { Link } from "react-router-dom";

import { selectCategoryList } from "../../redux/category/selectors";

import { Icon } from "../Icon";
import { Nav, MenuList, MenuUl } from "./style";

type MenuItemProps = {
  name: string;
  id: string;
};
type MenuProps = {
  list: any[];
};

const MenuItem: React.FC<MenuItemProps> = ({ name, id }) => {
  return (
    <MenuList>
      <Link to={`/category/${id}`}>
        <Icon name={name}></Icon>
        <span>{name}</span>
      </Link>
    </MenuList>
  );
};

const Menu: React.FC<MenuProps> = ({ list }) => {
  return (
    <MenuUl>
      {list.map((item: MenuItemProps, index) => (
        <MenuItem
          name={item.name}
          key={item.id || index}
          id={item.id}
        ></MenuItem>
      ))}
    </MenuUl>
  );
};

const Navigation: React.FC = () => {
  const state = useSelector(selectCategoryList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(category.list("categories"));
  }, []);
  return (
    <Nav>
      <Menu list={state} />
    </Nav>
  );
};
export default Navigation;
