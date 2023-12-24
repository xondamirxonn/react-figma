import img1 from "../assets/ourblog-img1.png";
import img2 from "../assets/ourblog-img2.png";
import img3 from "../assets/orublog-img3.png";
import personImg from "../assets/aside-albus.png";
import Man from '../assets/services-man.png'
import news from '../assets/news.png'
import imgs3 from '../assets/value.png'

import "./OurBlog.css";
function BlogNews() {
  return (
    <section className="container">
      <div className="text-center">
        <p>Our Blog</p>
        <h1>
          Value proposition accelerator product <br /> management venture
        </h1>
      </div>
      <div className="gridd my-5">
        <div>
          <img className="img1" src={img1} alt="" />
          <div className="d-flex gap-5 align-items-baseline">
            <h6 className="fw-bold">Category</h6>
            <small>November 22, 2021</small>
          </div>
          <h6 className="my-3">
            Pitch termsheet backing <br /> validation focus release.
          </h6>
          <div className="d-flex gap-2 align-items-center py-5">
            <img className="personImg1" src={personImg} alt="" />
            <small>Chandler Bing</small>
          </div>
        </div>
        <div>
          <img className="img1" src={img2} alt="" />
          <div className="d-flex gap-5 align-items-baseline">
            <h6 className="fw-bold">Category</h6>
            <small>November 22, 2021</small>
          </div>
          <h6 className="my-3">
            Seed round direct mailing non- <br /> disclosure agreement graphical{" "}
            <br /> user interface rockstar.
          </h6>
          <div className="d-flex gap-2 align-items-center py-3">
            <img className="personImg1" src={personImg} alt="" />
            <small>Rachel Green</small>
          </div>
        </div>

        <div>
          <img className="img1" src={img3} alt="" />
          <div className="d-flex gap-5 align-items-baseline">
            <h6 className="fw-bold">Category</h6>
            <small>November 22, 2021</small>
          </div>
          <h6 className="my-3">
            Beta prototype sales iPad gen-z <br /> marketing network effects
            value <br />
            proposition
          </h6>
          <div className="d-flex gap-2 align-items-center py-3">
            <img className="personImg1" src={personImg} alt="" />
            <small>Monica Geller</small>
          </div>
        </div>
        <div>
          <img className="img1" src={Man} width={300} height={208} alt="" />
          <div className="d-flex gap-5 align-items-baseline">
            <h6 className="fw-bold">Category</h6>
            <small>November 22, 2021</small>
          </div>
          <h6 className="my-3">
            Pitch termsheet backing <br /> validation focus release.
          </h6>
          <div className="d-flex gap-2 align-items-center py-5">
            <img className="personImg1" src={personImg} alt="" />
            <small>Chandler Bing</small>
          </div>
        </div>
        <div>
          <img className="img1" src={news} alt="" />
          <div className="d-flex gap-5 align-items-baseline">
            <h6 className="fw-bold">Category</h6>
            <small>November 22, 2021</small>
          </div>
          <h6 className="my-3">
            Seed round direct mailing non- <br /> disclosure agreement graphical{" "}
            <br /> user interface rockstar.
          </h6>
          <div className="d-flex gap-2 align-items-center py-5">
            <img className="personImg1" src={personImg} alt="" />
            <small>Chandler Bing</small>
          </div>
        </div>
        <div>
          <img
            className="img1 rounded-5"
            src={imgs3}
            width={300}
            height={208}
            style={{ objectFit: "cover" }}
            alt=""
          />
          <div className="d-flex gap-5 align-items-baseline">
            <h6 className="fw-bold">Category</h6>
            <small>November 22, 2021</small>
          </div>
          <h6 className="my-3">
            Beta prototype sales iPad gen-z <br /> marketing network effects
            value <br />
            proposition
          </h6>
          <div className="d-flex gap-2 align-items-center py-5">
            <img className="personImg1" src={personImg} alt="" />
            <small>Chandler Bing</small>
          </div>
        </div>
      </div>

      <div className="blo">
        <a
          className="rounded-4 blog text-decoration-none  "
          style={{ border: "1px solid #0A2640" }}
          href="#"
        >
          Load More
        </a>
      </div>
    </section>
  );
}

export default BlogNews
