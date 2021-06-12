import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../redux/images/actions";

import { selectCategoryById } from "../redux/category/selectors";
import { DefaultLayout } from "../layout";

const Category: React.FC = () => {
  interface ParamTypes {
    id: string;
  }
  const { id } = useParams<ParamTypes>();
  console.log("id : ", id);
  const category = useSelector(selectCategoryById(id));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(images.search("images", id, 10));
  }, [id]);
  // useEffect(() => {
  //   console.log("category : ", category);
  // }, [category]);

  return (
    <DefaultLayout>
      <h1>Category Page {id}</h1>
      <button>Back Category</button>
    </DefaultLayout>
  );
};
export default Category;
