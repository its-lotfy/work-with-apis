import VideoCard from "@/features/aparat/VideoCard";
import PropTypes from "prop-types";
const SearchResults = ({ results }) => {
  return (
    <div className="grid gap-2 px-3 md:grid-cols-5 ">
      {results.length == 0 ? (
        <div> </div>
      ) : (
        results.map((video, idx) => <VideoCard key={idx} video={video} />)
      )}
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array,
};
export default SearchResults;
