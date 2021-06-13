import React, { useState, useEffect } from "react";

export const useImage = (src: string) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [localUrl, setLocalUrl] = useState("");

  useEffect(() => {
    // setLocalUrl(true);
    setHasLoaded(false);
    setHasError(false);

    var outside;

    fetch(src)
      .then((response) => response.blob())
      .then((images) => {
        // Then create a local URL for that image and print it
        outside = URL.createObjectURL(images);
        setLocalUrl(outside);
        setHasLoaded(true);
      })
      .catch(function () {
        setHasError(true);
      });
  }, [src]);

  return { hasLoaded, hasError, localUrl };
};
