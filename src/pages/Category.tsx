import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../redux/images/actions";
import Image from "../components/Image";
import { selectImageList } from "../redux/images/selectors";
import { DefaultLayout } from "../layout";

type imageProps = {
  id: string;
  url: string;
};

type ListProps = {
  list: any[];
};
const ImagesList: React.FC<ListProps> = ({ list }) => {
  return (
    <>
      {list.map((item: imageProps) => (
        <Image key={item.id} src={item.url} />
      ))}
    </>
  );
};

// const Menu: React.FC<MenuProps> = ({ list }) => {
//   return (
//     <MenuUl>
//       {list.map((item: MenuItemProps, index) => (
//         <MenuItem
//           name={item.name}
//           key={item.id || index}
//           id={item.id}
//         ></MenuItem>
//       ))}
//     </MenuUl>
//   );
// };
const Category: React.FC = () => {
  interface ParamTypes {
    id: string;
  }
  const { id } = useParams<ParamTypes>();
  console.log("id : ", id);
  const list = useSelector(selectImageList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(images.search("images", id, 10));
  }, [id]);
  useEffect(() => {
    console.log("images : ", list);
  }, [list]);

  return (
    <DefaultLayout>
      <h1>Category Page {id}</h1>
      <button>Back Category</button>
      <ImagesList list={list} />
    </DefaultLayout>
  );
};
export default Category;
