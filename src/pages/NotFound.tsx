import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DefaultLayout } from "../layout";
import history from "../utils/history";

const NotFound: React.FC = () => {
  useEffect(() => {
    history.replace("/notfound");
  }, []);
  return (
    <DefaultLayout>
      <p>Not Found</p>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </DefaultLayout>
  );
};
export default NotFound;
