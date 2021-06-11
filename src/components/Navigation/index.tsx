import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { selectCategoryList } from "../../redux/category/selectors";

import { Icon } from "../Icon";

type MenuItemProps = {
  name: string;
  id: string;
};
type MenuProps = {
  list: any[];
};

const MenuItem: React.FC<MenuItemProps> = ({ name, id }) => {
  return (
    <li>
      <Link to={`/category/${id}`}>
        <Icon name={name}></Icon>
        <span>{name}</span>
      </Link>
    </li>
  );
};

const Menu: React.FC<MenuProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item: MenuItemProps, index) => (
        <MenuItem
          name={item.name}
          key={item.id || index}
          id={item.id}
        ></MenuItem>
      ))}
    </ul>
  );
};

const Navigation: React.FC = () => {
  const state = useSelector(selectCategoryList);
  return <Menu list={state} />;
};
export default Navigation;
