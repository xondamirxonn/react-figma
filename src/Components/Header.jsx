import NavLink from "./NavLink";
import HeaderLogo from "../assets/boldoLogo.png";

function Header() {
  return (
    <div style={{ backgroundColor: "#0A2640" }} className="list-unstyled py-3 ">
      <div className="container d-flex align-items-center justify-content-between ">
        <NavLink link="/">
          <img  src={HeaderLogo} alt="" />
        </NavLink>
        <ul className="d-flex list-unstyled gap-3  ">
          <NavLink link="/"></NavLink>
          <NavLink link="#">Product</NavLink>
          <NavLink link="#">Services</NavLink>
          <NavLink link="/about">About</NavLink>
          <NavLink link="/blog">Blog</NavLink>
        </ul>
      </div>
    </div>
  );
}


export default Header
