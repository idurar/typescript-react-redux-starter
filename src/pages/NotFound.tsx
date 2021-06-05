import React, { useEffect } from "react";
import history from "../utils/history";

const NotFound: React.FC = () => {
  useEffect(() => {
    history.replace("/notfound");
  }, []);
  return (
    <div>
      <p>Not Found</p>
      <button>Back Home</button>
    </div>
  );
};
export default NotFound;
