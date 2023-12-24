import showcaseImg1 from "../assets/showcase-img1.png"
import showcaseImg2 from "../assets/showcase-img2.svg"
import showcaseImg3 from "../assets/showcase-img3.svg";
import brandBoldo from "../assets/brand-boldo.png"
import brandPresto from "../assets/brand-presto.png"
import brandPres from "../assets/brand-pres.png";

function Showcase() {
  return (
    <div style={{ backgroundColor: "#0A2640" }}>
      <div className="container text-white d-flex ">
        <div className="d-flex justify-content-between w-100 py-5 align-items-center">
          <div className="">
            <h1 style={{fontSize: "3rem"}}>
              Save time by building <br /> fast with Boldo Template{" "}
            </h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. <br /> First mover advantage innovator success
              deployment non-disclosure.
            </p>
            <div className="d-flex gap-3">
              <a
                className="bg-success border border-success rounded-4 p-2 text-decoration-none "
                style={{ color: "#0A2640" }}
                href="#"
              >
                Buy template
              </a>
              <a
                className="border border-white text-white rounded-4 p-2 text-decoration-none"
                href="#"
              >
                Explore
              </a>
            </div>
          </div>
          <div className="py-3">
            <img src={showcaseImg1} alt="" />
            <div className="py-4 d-flex align-items-center justify-content-between">
              <img src={showcaseImg2} alt="" />
              <img src={showcaseImg3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between pb-3">
        <img src={brandBoldo} alt="" />
        <img src={brandPresto} alt="" />
        <img src={brandBoldo} alt="" />
        <img src={brandPresto} alt="" />
        <img src={brandBoldo} alt="" />
        <img src={brandPres} alt="" />
      </div>
    </div>
  );
}

export default Showcase;
