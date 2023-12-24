import Abouts from "../Components/Abouts";
import Header from "../Components/Header";
import Login from "../Components/Login";
import Numbers from "../Components/Numbers";
import Story from "../Components/Story";
import Team from "../Components/Team";
import Values from "../Components/Values";
import Footer from "../Components/footer";

function About() {
  return (
    <div>
      <Header />
      <Abouts />
      <Story />
      <Numbers />
      <Team />
      <Values />
      <Login />
      <Footer />
    </div>
  );
}

export default About;
