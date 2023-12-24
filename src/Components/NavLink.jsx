import { Component } from "react";
import { Link } from "react-router-dom";

class NavLink extends Component {
  render() {
    return (
      <>
        <Link className="text-decoration-none text-white" to={this.props.link}>
          <li>{this.props.children}</li>
        </Link>
      </>
    );
  }
}

export default NavLink;
