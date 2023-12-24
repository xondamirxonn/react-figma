import sectionimg from "../assets/section-img.svg";
function HomeSection() {
  return (
    <section className="container my-5">
      <div className=" ">
        <img style={{ width: "100%" }} src={sectionimg} alt="" />
      </div>
      <div className="d-flex justify-content-between my-4">
        <h1>
          We connect our customers <br /> with the best, and help them <br />{" "}
          keep up-and stay open.
        </h1>
        <div>
          <div className="d-flex justify-content-between align-items-baseline fa-xl">
            <h5>We connect our customers with the best?</h5>
            <i class="fa-solid fa-circle-chevron-down"></i>
          </div>
          <div style={{ borderBottom: "1px double #0A2640" }} className="py-2"></div>
          <div className="d-flex align-items-baseline gap-3 fa-xl my-3">
            <h5>Android research & development rockstar?</h5>
            <i class="fa-solid fa-circle-chevron-down"></i>
          </div>
          <div style={{ borderBottom: "1px double #0A2640" }}></div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
