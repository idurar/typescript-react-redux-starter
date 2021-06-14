import React from "react";
import { useImage } from "../../hooks/useImage";
import Loading from "../Loading";
import { WhiteBox } from "./style";

const LoadImage: React.FC<{ src: string }> = ({ src }) => {
  const { hasLoaded, hasError, localUrl } = useImage(src);

  if (hasError) {
    return <p>Error No Image </p>;
  }

  return (
    <>
      {!hasLoaded && <Loading></Loading>}
      {hasLoaded && <img src={localUrl} />}
    </>
  );
};

const Image: React.FC<{ src: string }> = ({ src }) => {
  return (
    <WhiteBox>
      <LoadImage src={src} />
    </WhiteBox>
  );
};

export default Image;
