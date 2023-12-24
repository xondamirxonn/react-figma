import Scoot from '../assets/team-scoot.png'
import Dwight from '../assets/team-driff.png'
import Pam from "../assets/team-pam.png";

function Team() {
 return (
   <section className="container my-5">
     <div style={{ margin: "0 300px" }}>
       <p>Our Team</p>
       <h1>The leadership team</h1>
       <p>
         Conversion angel investor entrepreneur first mover advantage. Handshake{" "}
         <br />
         infographic mass market crowdfunding iteration. Traction stock user
         experience <br /> deployment beta innovator incubator focus.
       </p>
     </div>
     <div className="d-flex justify-content-around py-5">
       <div>
         <img src={Scoot} alt="" />
         <h2  className='py-2'>Michael Scott</h2>
         <p>General Manager</p>
       </div>
       <div>
         <img src={Dwight} alt="" />
         <h2 className='py-2'>Dwight Schrute</h2>
         <p>General Manager</p>
       </div>
       <div>
         <img src={Pam} alt="" />
         <h2 className='py-2'>Pam Beetsley</h2>
         <p>General Manager</p>
       </div>
     </div>
   </section>
 );
}

export default Team