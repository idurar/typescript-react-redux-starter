import React from "react";

import { Spinner } from "./style";

const Loading: React.FC = () => {
  return (
    <Spinner>
      <div className="loader"></div>
    </Spinner>
  );
};

export default Loading;
