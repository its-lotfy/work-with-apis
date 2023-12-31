import PropTypes from "prop-types";

const HamburgurMenue = ({ isOpen, handleOpen }) => {
  return (
    <div className={`navbar-menu relative z-50 ${isOpen ? " " : "hidden"}`}>
      <div
        className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        onClick={() => handleOpen((prev) => !prev)}
      />
      <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <button
            className="navbar-close"
            onClick={() => handleOpen((prev) => !prev)}
          >
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mt-auto">
          <p className="my-4 text-xs text-center text-gray-400">
            <span>Copyright © 2023</span>
          </p>
        </div>
      </nav>
    </div>
  );
};

HamburgurMenue.propTypes = {
  isOpen: PropTypes.bool,
  handleOpen: PropTypes.func,
};
export default HamburgurMenue;
