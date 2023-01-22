import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../Context/UserContext";
import { FcGoogle } from "react-icons/fc";
  import 'react-toastify/dist/ReactToastify.css';

import { BsGithub } from "react-icons/bs";
const Providers = () => {
    const [status, setStatus] = useState("");
  const [userUid, setuserUid] = useState("");
   let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();


  const { handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);
  const handlegooglelogin = () => {
    handleGoogleSignIn()
      .then((res) => {
        console.log(res.user);
        setStatus("logged in");
        const name = res.user?.displayName;
        const email = res.user?.email;
        const uid = res.user?.uid;
        const image = res.user?.photoURL;
        const userAbout = "member";
        setuserUid(uid);
        saveUserToDb(name, image, email, uid, userAbout);

        const notify = () => toast.success('Login Successful');
        notify();

        // navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setStatus(err);
        const notify = () => toast.error(err.message);
        notify();
      });
  };
  const handlegithublogin = () => {
    handleGithubSignIn()
      .then((res) => {
        console.log(res.user);
        setStatus("logged in");
        const name = res.user?.displayName;
        const email = res.user?.email;
        const image = res.user?.photoURL;
        const uid = res.user?.uid;
        const userAbout = "member";
        setuserUid(uid);
        saveUserToDb(name, image, email, uid, userAbout);
        const notify = () => toast.success('Login Successful');
        notify();
        // navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setStatus(err);
        const notify = () => toast.error(err.message);
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
        console.log("save user", data);
        setuserUid(uid);
      });
  };
  return <div>
    <ToastContainer />
    <div className="flex mx-16 justify-around items-center  mb-6">
              <button  onClick={handlegooglelogin}  className="btn btn-ghost btn-circle ">
                <FcGoogle className="text-4xl" />
              </button>
              <button onClick={handlegithublogin} className="btn btn-ghost btn-circle ">
                <BsGithub className="text-4xl" />
              </button>
            </div>
  </div>;
};

export default Providers;
