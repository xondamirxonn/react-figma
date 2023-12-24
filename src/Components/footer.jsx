import FooterLogo from "../assets/footer-logo.png";

function Footer() {
  return (
    <footer className="container py-5 d-flex justify-content-between">
      <div>
        <img src={FooterLogo} alt="" />
        <h6 className="my-4">
          Social media validation business model <br /> canvas graphical user
          interface launch <br /> party creative facebook iPad twitter.
        </h6>
        <p className="my-5">All rights reserved.</p>
      </div>
      <div>
        <h3 style={{ color: "#0A2640" }}>Landings</h3>
        <ul className="list-unstyled py-3">
          <li className="py-3">
            <a className="text-secondary text-decoration-none " href="">
              Home
            </a>
          </li>
          <li className="py-3">
            <a className="text-secondary text-decoration-none " href="">
              Products
            </a>
          </li>
          <li className="py-3">
            <a className="text-secondary text-decoration-none " href="">
              Services
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 style={{ color: "#0A2640" }}>Company</h3>
        <ul className="list-unstyled py-3">
          <li className="py-3">
            <a className="text-secondary text-decoration-none " href="">
              Home
            </a>
          </li>
          <li className="py-3">
            <a className="text-secondary text-decoration-none " href="">
              Careers{" "}
              <span className="bg-success p-2 rounded-5" style={{ color: "#0A2640" }}>
                Hiring!
              </span>
            </a>
          </li>
          <li className="py-3">
            <a className="text-secondary text-decoration-none " href="">
              Services
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 style={{ color: "#0A2640" }}>Resources</h3>
        <ul className="list-unstyled py-3">
          <li className="py-3">
            <a className="text-secondary text-decoration-none " href="">
              Blog
            </a>
          </li>
          <li className="py-3">
            <a className="text-secondary text-decoration-none " href="">
              Products
            </a>
          </li>
          <li className="py-3">
            <a className="text-secondary text-decoration-none " href="">
              Services
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer
