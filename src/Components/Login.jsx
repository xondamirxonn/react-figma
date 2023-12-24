function Login() {
  return (
    <div style={{ backgroundColor: "#0A2640 " }} className="container text-center text-white p-5 rounded-4 my-5">
      <h1>
        An enterprise template to ramp <br /> up your company website
      </h1>
      <form className="d-flex gap-4 align-items-center py-3 justify-content-center">
        <input className="form-control w-25 p-2 rounded-4" type="email" placeholder="Your email address" required />
        <button className="btn btn-success rounded-4">Start Now</button>
      </form>
    </div>
  );
}

export default Login