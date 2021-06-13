import React from "react";
import { useImage } from "../../hooks/useImage";
import Loading from "../Loading";

const Image: React.FC<{ src: string }> = ({ src }) => {
  const { hasLoaded, hasError, localUrl } = useImage(src);

  if (hasError) {
    return <p>Error No Image </p>;
  }

  return (
    <>
      {!hasLoaded && <Loading />}
      {hasLoaded && <img src={localUrl} />}
    </>
  );
};

export default Image;
