import { useEffect, useState } from "react";

export let useCurrentWidth = () => {
  let [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setWidth(window.innerWidth);
    });
  }, []);

  return width;
};
