import ServiceImg1 from "../assets/service-img1.svg";
import ServiceImg2 from "../assets/service-img2.svg";
import ServiceImg3 from "../assets/serivce-img3.svg";
import ServicesMan from "../assets/services-man.png";
import ServicesWoman from "../assets/services-woman.svg";
import ServicesStatic from "../assets/services-static-1.png";
import ServicesStatic2 from "../assets/services-static2.svg";
import "../Components/Services.css"

function Service() {
  return (
    <div className="container">
      <div className="text-center">
        <p className="text-secondary my-5">Our Services</p>
        <h1 className="">
          Handshake infographic mass market <br /> crowdfunding iteration.
        </h1>
      </div>
      <div className="d-flex justify-content-around py-5">
        <div className="py-2">
          <img src={ServiceImg1} alt="" />
          <h3 className="py-3">Cool feature title</h3>
          <p>
            Learning curve network effects <br /> return on investment.
          </p>
          <a
            className="text-decoration-none  py-1 "
            style={{ color: "#0A2640" }}
            href="#"
          >
            Explore Page <i class="fa-solid fa-arrow-right"></i>
          </a>
          <div
            className="w-50 py-2"
            style={
              ({ color: "#0A2640" }, { borderBottom: "1px double #0A2640" })
            }
          ></div>
        </div>
        <div className="py-2">
          <img src={ServiceImg2} alt="" />
          <h3 className="py-3">Even cooler feature</h3>
          <p>
            Learning curve network effects <br /> return on investment.
          </p>
          <a
            className="text-decoration-none  py-1"
            style={{ color: "#0A2640" }}
            href="#"
          >
            Explore Page <i class="fa-solid fa-arrow-right"></i>
          </a>
          <div
            className="w-50 py-2"
            style={
              ({ color: "#0A2640" }, { borderBottom: "1px double #0A2640" })
            }
          ></div>
        </div>
        <div className="py-2">
          <img src={ServiceImg3} alt="" />
          <h3 className="py-3">Cool feature title</h3>
          <p>
            Learning curve network effects <br /> return on investment.
          </p>
          <a
            className="text-decoration-none  py-1"
            style={{ color: "#0A2640" }}
            href="#"
          >
            Explore Page <i class="fa-solid fa-arrow-right"></i>
          </a>
          <div
            className="w-50 py-2"
            style={
              ({ color: "#0A2640" }, { borderBottom: "1px double #0A2640" })
            }
          ></div>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div>
          <img className="position-absolute" src={ServicesMan} alt="" />
          <img
            src={ServicesStatic}
            alt=""
            className="position-relative mx-5 px-5 "
            style={{ top: "10rem" }}
          />
        </div>
        <div>
          <h1>
            We connect our customers <br /> with the best, and help them <br />{" "}
            keep up-and stay open.
          </h1>
          <div className="py-3">
            <div className="d-flex gap-3  ">
              <span>
                <i class="fa-solid fa-circle-check fa-2xl"></i>
              </span>
              <p>We connect our customers with the best.</p>
            </div>
            <div className="d-flex gap-3 ">
              <span>
                <i class="fa-solid fa-circle-check fa-2xl"></i>
              </span>
              <p>Advisor success customer launch party.</p>
            </div>
            <div className="d-flex gap-3 ">
              <span>
                <i class="fa-solid fa-circle-check fa-2xl"></i>
              </span>
              <p>Business-to-consumer long tail.</p>
            </div>
            <a
              className="border rounded-full px-5 py-3 d-inline-block my-3 text-white text-decoration-none rounded-pill"
              style={{ backgroundColor: "#0A2640" }}
              href="#"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-between  "
        style={{ marginTop: "10rem" }}
      >
        <div>
          <h1>
            We connect our customers <br /> with the best, and help them <br />{" "}
            keep up-and stay open.
          </h1>

          <div className="border borderr d-flex align-items-baseline my-3    rounded-2 shadow-lg ">
            <span className="my-4 mx-3">
              <i class="fa-solid fa-feather"></i>
            </span>
            <p>We connect our customers with the best.</p>
          </div>

          <div className="border borderr d-flex align-items-baseline my-3   rounded-2 shadow-lg ">
            <span className="my-4 mx-3">
              <i class="fa-regular  fa-eye"></i>
            </span>
            <p>Advisor success customer launch party.</p>
          </div>

          <div className="border borderr d-flex align-items-baseline    rounded-2 shadow-lg ">
            <span className="my-4 mx-3">
              <i class="fa-regular fa-sun"></i>
            </span>
            <p>Business-to-consumer long tail.</p>
          </div>
        </div>
        <div className="imgDiv">
          <img className="position-absolute img1 " src={ServicesWoman} alt="" />
          <img
            className="position-relative img2"
            src={ServicesStatic2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
