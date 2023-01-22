import React, { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.birds.min";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/Context/UserContext";
import Providers from "../../Auth/Providers/Providers"
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import useToken from "../../../hooks/useToken";
// ..
AOS.init();
const Login = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  
  const { signin, user, sendPassResetMail } = useContext(AuthContext);
  const [status, setStatus] = useState("");

  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [userUid, setuserUid] = useState("");
  const [token] = useToken(userUid);
  if (token) {
    navigate(from, { replace: true });
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("Loading...");
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signin(email, password)
      .then((res) => {
        console.log(res.user);
        setStatus("Login Successful");
        const notify = () => toast.success(status);
        notify();
        setuserUid(res.user.uid);
      })
      .catch((err) => {
        console.log(err);
        setStatus(err.message);
        const notify = () => toast.error(status);
        notify();
      });
  };
  const saveMail = (e) => {
    const mail = e.target.value;
    localStorage.setItem("mail", mail);
    // console.log(mail);
  };
  const handleresetpass = () => {
    const email = localStorage.getItem("mail");
    if (email == "") {
      setStatus("Please Enter Your Email at Your Email Field");
      const notify = () => toast.error(status);
      notify();
      return;
    }
    console.log(email);
    sendPassResetMail(email)
      .then(() => {
        setStatus("Password reset mail sent");
        const notify = () => toast.error(status);
        notify();
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setStatus(errorMessage);
        const notify = () => toast.error(status);
        notify();
        // ..
      });
  };
  if (user?.uid && localStorage.getItem("token")) {
    return <Navigate to="/"></Navigate>;
  }
  toast("login field automatically filled with test account");

  return (
    <div className="appBack" ref={myRef}>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center text-white lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            {/* <h1 className="text-4xl font-bold mt-7 ">Welcome Back</h1> */}

            <form onSubmit={handleLogin} className="card-body pb-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  defaultValue="admin@paradox-bd.com"
                  name="email"
                  className="input input-bordered"
                  required={true}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                   defaultValue="mysite"
                  placeholder="password"
                  className="input input-bordered"
                  required={true}
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            <small className="text-red-500">{status}</small>
            </form>
            <div className="App">
          <small className='text-sm'>
            forget pass?{" "}
            <button onClick={handleresetpass} className="text-primary">
              reset here
            </button>
          </small>
        </div>
            <div class="divider mt-10 mx-12">OR</div>
            

            <Providers></Providers>
            <p className="label-text-alt mb-6 ">
              not a user?{" "}
              <span className="text-secondary link link-hover">
                <Link to="/register">register here</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
