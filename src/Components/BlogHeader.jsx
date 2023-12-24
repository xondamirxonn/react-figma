import NavLink from "./NavLink";
import HeaderLogoBlog from "../assets/footer-logo.png";
import BlogNavLink from "./BlogNavLink";

function Headers() {
  return (
    <div  className="list-unstyled py-3 ">
      <div className="container d-flex align-items-center justify-content-between ">
        <NavLink link="/">
          <img src={HeaderLogoBlog} alt="" />
        </NavLink>
        <ul className="d-flex list-unstyled gap-3 text-dark ">
          <BlogNavLink link="/"></BlogNavLink>
          <BlogNavLink link="#">Product</BlogNavLink>
          <BlogNavLink link="#">Services</BlogNavLink>
          <BlogNavLink link="/about">About</BlogNavLink>
          <BlogNavLink link="/blog">Blog</BlogNavLink>
        </ul>
      </div>
    </div>
  );
}

export default Headers;
