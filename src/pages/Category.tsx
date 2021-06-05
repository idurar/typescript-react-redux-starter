import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import { category } from "../redux/category/actions";
import { selectCategoryById } from "../redux/category/selectors";

const Category: React.FC = () => {
  const dispatch = useDispatch();
  interface ParamTypes {
    id: string;
  }
  const { id } = useParams<ParamTypes>();
  console.log("id : ", id);
  const category = useSelector(selectCategoryById(id));
  useEffect(() => {
    console.log("category : ", category);
  }, [category]);

  return (
    <>
      <h1>Category Page {id}</h1>
      <button>Back Category</button>
    </>
  );
};
export default Category;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Navigation from "../components/Navigation";
// import { category } from "../redux/category/actions";
// import { selectCategoryList } from "../redux/category/selectors";
// const Home: React.FC = () => {
//   const dispatch = useDispatch();
//   const state = useSelector(selectCategoryList);

//   useEffect(() => {
//     console.log("useSelector(selectCategory)", state);
//   }, [state]);
//   useEffect(() => {
//     dispatch(category.list("categories"));
//   }, []);
//   return (
//     <>
//       <Navigation></Navigation>
//       <h1>Home Page</h1>
//       <button>Back Home</button>
//     </>
//   );
// };
