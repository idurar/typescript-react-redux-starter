import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import { category } from "../redux/category/actions";
import { selectCategoryList } from "../redux/category/selectors";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectCategoryList);

  useEffect(() => {
    console.log("useSelector(selectCategory)", state);
  }, [state]);
  useEffect(() => {
    dispatch(category.list("categories"));
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <h1>Home Page</h1>
      <button>Back Home</button>
    </>
  );
};
export default Home;
