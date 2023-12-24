import ValueImg1 from "../assets/orublog-img3.png";
import ValueImg2 from "../assets/ourblog-img1.png";
import ValueImg3 from "../assets/value.png";

function Values() {
  return (
    <section style={{ backgroundColor: "#0A2640" }} className="p-5">
      <div className="container text-white p-5 d-grid flex-column justify-content-center"> 
        <p>Our values</p>
        <h1>Things in we believe</h1>
        <p>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake <br /> infographic mass market crowdfunding iteration.
          Traction stock user experience <br /> deployment beta innovator
          incubator focus.
        </p>
      </div>
      <div className="container d-flex gap-4 justify-content-center">
        <img style={{ height: "80px" }} src={ValueImg1} alt="" />
        <div className="text-white">
          <h4>We are commited.</h4>
          <p>
            Conversion angel investor entrepreneur first mover advantage. <br />
            Handshake infographic mass market crowdfunding iteration.{" "}
          </p>
        </div>
      </div>

      <div className="container d-flex gap-4 justify-content-center py-5">
        <img style={{ height: "80px" }} src={ValueImg2} alt="" />
        <div className="text-white">
          <h4>We are commited.</h4>
          <p>
            Conversion angel investor entrepreneur first mover advantage. <br />
            Handshake infographic mass market crowdfunding iteration.{" "}
          </p>
        </div>
      </div>

      <div className="container d-flex gap-4 justify-content-center">
        <img style={{ height: "100px" }} src={ValueImg3} alt="" />
        <div className="text-white">
          <h4>We are commited.</h4>
          <p>
            Conversion angel investor entrepreneur first mover advantage. <br />
            Handshake infographic mass market crowdfunding iteration.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Values;
