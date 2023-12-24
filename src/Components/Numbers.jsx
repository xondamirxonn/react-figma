function Numbers() {
  return (
    <section style={{ backgroundColor: "#0A2640" }}>
      <div className="text-center text-white container p-5">
        <p>Our Numbers</p>
        <h1>
          Handshake infographic mass market <br /> crowdfunding iteration.
        </h1>
      </div>
      <div className="d-flex justify-content-around container p-5 ">
        <div>
          <h1 style={{fontSize: "6rem"}}  className="text-success">120m</h1>
          <span className="text-white">Cool feature title</span>
        </div>
        <div>
          <h1  style={{fontSize: "6rem"}} className="text-success">10.000</h1>
          <span className="text-white">Cool feature title</span>
        </div>
        <div>
          <h1  style={{fontSize: "6rem"}} className="text-success ">240</h1>
          <span className="text-white">Cool feature title</span>
        </div>
      </div>
    </section>
  );
}

export default Numbers