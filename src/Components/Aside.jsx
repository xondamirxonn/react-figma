import "../Components/Aside.css"
import Albus from '../assets/aside-albus.png'
import Snape from "../assets/aside-snape.png";
import Harry from "../assets/aside-harry.png";
import Section from '../assets/section-img.svg'

function Aside() {
  return (
    <aside className="p-5" style={{ backgroundColor: "#0A2640" }}>
      <div className="container d-flex align-items-end justify-content-between py-5">
        <h1 className="text-white">
          An enterprise template to ramp <br /> up your company website
        </h1>
        <div className="d-flex gap-4">
          <div className="bg-white arrow rounded-circle d-flex align-items-center ">
            <i class="fa-solid fa-arrow-left m-auto fa-2xl"></i>
          </div>
          <div className="bg-white arrow rounded-circle d-flex align-items-center ">
            <i class="fa-solid fa-arrow-right m-auto fa-2xl"></i>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-around">
        <div className="albus border bg-white rounded-3 py-3 px-3  w-25 ">
          <h4 className="">
            “Buyer buzz partner network disruptive non-disclosure agreement
            business”
          </h4>
          <div className="albusimg d-flex align-items-center gap-3 py-4  ">
            <img src={Albus} alt="" />
            <div className="">
              <h6>Albus Dumbledore</h6>
              <span>Manager @ Howarts</span>
            </div>
          </div>
        </div>
        <div className="snape border bg-white rounded-3 py-3 px-3  w-25 ">
          <h3 className="">
            “Learning curve infrastructure value proposition advisor strategy
            user experience hypotheses investor.”
          </h3>
          <div className="snapeimg d-flex align-items-center gap-3 py-4  ">
            <img src={Snape} alt="" />
            <div className="">
              <h6>Severus Snape</h6>
              <span>Manager @ Howarts</span>
            </div>
          </div>
        </div>
        <div className="harry border bg-white rounded-3 py-3 px-3  w-25 ">
          <h4 className="">
            “Release facebook responsive web design business model canvas seed
            money monetization.”
          </h4>
          <div className="harryimg d-flex align-items-center gap-3 py-4  ">
            <img src={Harry} alt="" />
            <div className="">
              <h6>Harry Potter</h6>
              <span>Team Leader @ Gryffindor</span>
            </div>
          </div>
        </div>
      </div>

    </aside>

    
  );
}

export default Aside;
