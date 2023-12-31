import { useEffect, useState } from "react";

let sum = 0;
let count = 0;
let temp = 0;
const useCarousel = (catItems) => {
  const [rightSize, setData] = useState(0);
  const handleNavigation = (axis) => {
    catItems.current.style.right = axis * sum + "px";
  };
  useEffect(() => {
    const margin = parseInt(
      window.onload &&
        window
          .getComputedStyle(catItems.current.children[0])
          .getPropertyValue("margin-right"),
      10
    );

    let parentWidth = catItems.current.offsetWidth;
    let result = catItems.current.children;

    Array.from(result).forEach(function (item) {
      temp += item.clientWidth + margin * 2;
      if (temp < parentWidth) {
        sum = temp;
        count += 1;
      }
    });
  }, []);

  return [rightSize, (axis) => handleNavigation(axis)];
};

export default useCarousel;
