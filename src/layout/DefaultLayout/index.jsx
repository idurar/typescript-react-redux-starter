import React from "react";

import { CategoryContextProvider } from "@/context/category";

function DefaultLayout({ children }) {
  return <CategoryContextProvider>{children}</CategoryContextProvider>;
}

export default DefaultLayout;
