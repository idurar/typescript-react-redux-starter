import { useState, useEffect } from "react";

export const useImage = (src: string) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [localUrl, setLocalUrl] = useState("");

  useEffect(() => {
    setHasLoaded(false);
    setHasError(false);

    fetch(src, { mode: "no-cors" })
      .then(() => {
        setLocalUrl(src);
        setHasLoaded(true);
      })
      .catch(function () {
        setHasError(true);
      });
  }, [src]);

  return { hasLoaded, hasError, localUrl };
};
