import { Component } from "react";
import { Link } from "react-router-dom";

class BlogNavLink extends Component {
  render() {
    return (
      <>
        <Link className="text-decoration-none text-dark" to={this.props.link}>
          <li>{this.props.children}</li>
        </Link>
      </>
    );
  }
}

export default BlogNavLink;
