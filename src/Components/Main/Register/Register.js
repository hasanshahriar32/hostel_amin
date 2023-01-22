import React, { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "../Login/login.css";
import { ToastContainer, toast } from "react-toastify";
import Providers from "../../Auth/Providers/Providers";
import { BsGithub } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "react-toastify/dist/ReactToastify.css";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../../Auth/Context/UserContext";
import app from '../../Auth/Firebase/Firebase.init';
import useToken from "../../../hooks/useToken";
// ..
AOS.init();
const Register = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
    const auth = getAuth(app);
  const { createUser, user } = useContext(AuthContext);
  const [agree, setAgree] = useState(false);
  const [seller, setSeller] = useState(false);
  const [status, setStatus] = useState("");
  const [userType, setUserType] = useState("member");
  const [userUid, setuserUid] = useState("");
  const [token] = useToken(userUid);
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
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

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    setStatus("Loading...");
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const image = form.image.value;

    const userAbout = userType;
    // console.log(email, password);
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        setStatus("Register Successful");
        const notify = () => toast.success(status);
        notify();
        handleUpdate(name, image);
        const uid = res.user?.uid;

        saveUserToDb(name, image, email, uid, userAbout);
      })
      .catch((err) => {
        console.log(err);
        setStatus(err.message);
        const notify = () => toast.error(status);
        notify();
      });
  };
  const saveUserToDb = (name, image, email, uid, userAbout) => {
    fetch("https://amin-mess-server.vercel.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, image, email, uid, userAbout }),
    })
      .then((res) => res.json())
      .then((data) => {
        // getUserToken(uid);

        console.log("save user", data);
        setuserUid(uid);
        if (token) {
          navigate(from);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
const handleUpdate = (name, image) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        console.log("update profile success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (user?.uid && localStorage.getItem("token")) {
    console.log(token);
    return <Navigate to={from} replace />;
  }


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

            <form onSubmit={handleSignUp} className="card-body">
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  name='name'
                  className="input input-bordered"
                />
              </div>
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                   name='image'
                  placeholder="your image link"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                   name='email'
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
                   name='password'
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
