import ServiceMan from '../assets/services-man.png'
import OurBlog from "../assets/About-img.png";
import ServicesWomen from '../assets/services-woman.svg';
import AboutPeople from "../assets/about-img-people.png";
import AboutImgPerson from "../assets/abouts-img-person.png";
import "./Abouts.css"

function Abouts() {
  return (
    <div>
      <section style={{ backgroundColor: "#0A2640" }}>
        <div className="container text-center text-white p-5 ">
          <p>About</p>
          <h1 className="fw-light">
            We love to make great <br /> things, things that matter.
          </h1>
          <p className="fw-light py-5">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage <br /> innovator success
            deployment non-disclosure.
          </p>
        </div>
      </section>

      <section className='container selection '>
      <div className='d-flex flex-column gap-3'>
    <img src={ServiceMan} className='Man' alt="" />
    <img className='ourblogs' src={OurBlog} alt="" />
      </div>
      <img className='Woman' src={ServicesWomen} alt="" />
      <div className='d-flex gap-3 flex-column'>
        <img className='Mans' src={AboutImgPerson} alt="" />
        <img className='Man2' src={AboutPeople} alt="" />
      </div>
  
      </section>
    </div>
  );
}

export default Abouts