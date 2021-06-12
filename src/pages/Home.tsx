import React, { useEffect } from "react";

import { DefaultLayout } from "../layout";

import { selectCategoryList } from "../redux/category/selectors";
const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <h1>Home Page</h1>
      <button>Back Home</button>
    </DefaultLayout>
  );
};
export default Home;
