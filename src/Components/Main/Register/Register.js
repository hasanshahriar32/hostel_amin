import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import GLOBE from "vanta/dist/vanta.globe.min";
import { FcGoogle } from "react-icons/fc";
import "../Login/login.css";
import Providers from "../../Auth/Providers/Providers";
import { BsGithub } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Register = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
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
  return (
    <div className="appBack" ref={myRef}>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center text-white lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            {/* <h1 className="text-4xl font-bold mt-7 ">Welcome Back</h1> */}

            <form className="card-body">
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div class="divider mx-12">OR</div>
            <Providers></Providers>
            <p className="label-text-alt mb-6 ">
              already a user?{" "}
              <span className="text-secondary link link-hover">
                <Link to="/login">login here</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
