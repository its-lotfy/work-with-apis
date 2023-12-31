import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorWrapper">
      <div className="errortext">
        <p>404</p>
      </div>
      <div className="errorcontainer">
        {/* caveman left */}
        <div className="caveman">
          <div className="leg">
            <div className="foot">
              <div className="fingers" />
            </div>
          </div>
          <div className="leg">
            <div className="foot">
              <div className="fingers" />
            </div>
          </div>
          <div className="shape">
            <div className="circle" />
            <div className="circle" />
          </div>
          <div className="head">
            <div className="eye">
              <div className="nose" />
            </div>
            <div className="mouth" />
          </div>
          <div className="arm-right">
            <div className="club" />
          </div>
        </div>
        {/* caveman right */}
        <div className="caveman">
          <div className="leg">
            <div className="foot">
              <div className="fingers" />
            </div>
          </div>
          <div className="leg">
            <div className="foot">
              <div className="fingers" />
            </div>
          </div>
          <div className="shape">
            <div className="circle" />
            <div className="circle" />
          </div>
          <div className="head">
            <div className="eye">
              <div className="nose" />
            </div>
            <div className="mouth" />
          </div>
          <div className="arm-right">
            <div className="club" />
          </div>
        </div>
      </div>
      {/* //////////////// CREDIT //////////////// */}
      <Link to={"/search"} className="errorbacktext">
        return to main page
      </Link>
    </div>
  );
};
export default Error;
