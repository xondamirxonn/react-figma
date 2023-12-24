import Aside from "../Components/Aside"
import Header from "../Components/Header"
import HomeSection from "../Components/HomeSection"
import Login from "../Components/Login"
import OurBlog from "../Components/OurBlog"
import Service from "../Components/Service"
import Showcase from "../Components/Showcase"
import Footer from "../Components/footer"

function Home() {
return(
  <div>
    <Header />
    <Showcase />
    <Service />
    <Aside />
    <HomeSection />
    <OurBlog />
    <Login />
    <Footer />
  </div>
)
}

export default Home