import PropTypes from "prop-types";
import person from "@/assets/images/person.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const navItem = [
  {
    title: "پروفایل",
    link: "/profile",
  },
  {
    title: "خروج",
    link: "/logout",
  },
];

const UserIcon = ({ isOpen, handleOpen }) => {
  useEffect(() => {
    const click = (e) => {
      if (isOpen) {
        handleOpen(false);
      } else if (!isOpen && e.target.classList.contains("person_icon")) {
        handleOpen(true);
      }
    };
    document.addEventListener("click", click);

    return () => {
      document.removeEventListener("click", click);
    };
  }, [isOpen, handleOpen]);
  return (
    <div className="relative ml-3 cursor-pointer">
      <ul
        className={`absolute top-10 left-5 bg-slate-50 rounded box shadow-lg transition-transform   ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        {navItem.map((itm, idx) => (
          <li key={idx}>
            <Link to={itm.link} className="px-5 py-2 inline-block">
              {itm.title}
            </Link>
          </li>
        ))}
      </ul>
      <img src={person} className="md:w-10 w-8 person_icon" />
    </div>
  );
};

UserIcon.propTypes = {
  isOpen: PropTypes.bool,
  handleOpen: PropTypes.func,
};
export default UserIcon;
