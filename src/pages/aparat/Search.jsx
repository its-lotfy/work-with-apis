import CatCarousel from "@/features/aparat/CatCarousel";
import SearchInput from "@/features/aparat/SearchInput";
import SearchResults from "@/features/aparat/SearchResults";
import { apGetAllCategories, apSearch } from "@/features/aparat/aparatSlice";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const { search: results, videoCategories } = useSelector(
    (state) => state.aparat
  );
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSearch = () => {
    dispatch(apSearch({ title, kind: "all" }));
  };
  const handleSearchByCat = (title) => {
    dispatch(apSearch({ title, kind: "cat" }));
  };

  // const optimizedFn = _.debounce(handleChange, 2000);
  useEffect(() => {
    dispatch(apGetAllCategories());
  }, []);

  return (
    <>
      <div className="min-h-full py-10">
        <SearchInput
          handleChange={handleChange}
          title={title}
          handleSearch={handleSearch}
        />
        {videoCategories && (
          <CatCarousel
            handleSearchByCat={handleSearchByCat}
            videoCategories={videoCategories}
          />
        )}

        <SearchResults results={results} />
      </div>
    </>
  );
};
export default Search;
