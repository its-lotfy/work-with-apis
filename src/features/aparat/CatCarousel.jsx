import useCarousel from "@/hooks/useCarosel";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
const CatCarousel = ({ videoCategories, handleSearchByCat }) => {
  const catItems = useRef();
  const [force, setforce] = useState(false);
  const [right, handleNavigation] = useCarousel(catItems);

  return (
    <div className="catBarWrapper my-2">
      <span className="arrowRight" onClick={() => handleNavigation(-1)}></span>
      <span className="arrowLeft" onClick={() => handleNavigation(1)}></span>
      <div className="catBar" ref={catItems}>
        {videoCategories.map((itm) => (
          <span
            onClick={() => handleSearchByCat(itm.id)}
            key={itm.id}
            className="catBar-item  "
          >
            {itm.name}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

CatCarousel.propTypes = {
  videoCategories: PropTypes.array,
  handleSearchByCat: PropTypes.func,
};
export default CatCarousel;
