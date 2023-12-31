import PropTypes from "prop-types";
import magnifire from "@/assets/images/aparat/search-magifire.svg";
const SearchInput = ({ handleChange, title, handleSearch }) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center justify-between p-6   bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-1 transition duration-500">
        <div className="flex bg-gray-100 p-4 w-72 flex-auto rounded-lg justify-between">
          <input
            value={title}
            name="title"
            onChange={handleChange}
            className="bg-gray-100 outline-none flex-auto"
            type="text"
            placeholder="جست وجوی نام،عنوان،..."
          />
          <img src={magnifire} width={25} />
        </div>

        <div className="bg-indigo-600 py-3 px-5 mr-2 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
          <button type="submit" onClick={handleSearch}>
            پیدا کن
          </button>
        </div>
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  handleChange: PropTypes.func,
  handleSearch: PropTypes.func,
  title: PropTypes.string,
};
export default SearchInput;
