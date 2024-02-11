import { useGetVideosQuery } from "@/API/apiSlice";
import CatCarousel from "@/features/aparat/CatCarousel";
import SearchInput from "@/features/aparat/SearchInput";
import SearchResults from "@/features/aparat/SearchResults";
import {
  allvideos,
  apGetAllCategories,
  apSearch,
} from "@/features/aparat/aparatSlice";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const [categoryId, setCategoryId] = useState();
  console.log(categoryId);
  const { data, isLoading } = useGetVideosQuery("ppp");
  const results = data?.categoryvideos;
  const dispatch = useDispatch();
  const { videoCategories } = useSelector((state) => state.aparat);
  const vid = useSelector(allvideos);
  console.log(vid);
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSearch = () => {
    dispatch(apSearch({ title, kind: "all" }));
  };
  const handleSearchByCat = (catId) => {
    setCategoryId(catId);
    // dispatch(apSearch({ title, kind: "cat" }));
  };

  // const optimizedFn = _.debounce(handleChange, 2000);
  useEffect(() => {
    dispatch(apGetAllCategories());
  }, []);
  if (isLoading) return <div>loaind</div>;
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
