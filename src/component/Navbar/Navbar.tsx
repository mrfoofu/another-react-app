import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/components">Basic Components</Link>
      </li>
    </div>
  );
};
export default Navbar;
