import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__div">
        <Link to="/" className="header__link">
          BrainPong
        </Link>
      </div>
      <div className="header__div">
        <a
          href="https://github.com/0x4337/brain-pong"
          target="_blank"
          className="header__link"
        >
          Github
        </a>
      </div>
    </header>
  );
};

export default Header;
