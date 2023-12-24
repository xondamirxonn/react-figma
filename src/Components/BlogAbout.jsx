import BlogImg1 from '../assets/blog-img1.png'
import chandler from '../assets/chandler.png'

function BlogAbout() {
  return (
    <section className="container">
      <div className="text-center my-5">
        <p style={{ color: "#0A2640" }}>Blog</p>
        <h1 style={{ color: "#0A2640" }}>Thoughts and words</h1>
      </div>

      <div className="d-flex justify-content-between w-auto align-items-center">
        <img src={BlogImg1} alt="" />
        <div>
          <div className="d-flex gap-3 align-items-center ">
            <h4>Category</h4>
            <span>November 22, 2021</span>
          </div>
          <h2 style={{ fontSize: "3rem" }}>
            Pitch termsheet backing <br /> validation focus release.
          </h2>
          <div className="d-flex gap-2 align-items-start py-3">
            <img src={chandler} alt="" />
            <p>Chandler Bing</p>
          </div>
        </div>
      </div>
      <div
        className='my-5'
        style={{ borderBottom: "1px double #0A2640" }}
      ></div>
    </section>
  );
}

export default BlogAbout