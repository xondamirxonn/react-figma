import BlogAbout from "../Components/BlogAbout";
import Headers from "../Components/BlogHeader";
import BlogNews from "../Components/BlogNews";
import Login from "../Components/Login";
import Footer from "../Components/footer";

function Blog() {
  return (
    <div>
      <Headers />
      <BlogAbout />
      <BlogNews />
      <Login />
      <Footer />
    </div>
  );
}

export default Blog;
