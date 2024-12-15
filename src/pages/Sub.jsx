import { useState } from "react";
import Otp from "../components/Otp";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Promote from "../components/Promote";

const Sub = () => {
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    if (email.trim() === "") {
      return;
    }
    try {
      setDisable(true);
      const response = await axios.post(import.meta.env.VITE_API_URL, {
        email,
      });
      localStorage.setItem("email", email);
      setShow(true);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.error || "server is down");
    } finally {
      setDisable(false);
    }
  };

  return (
    <>
      <Toaster />
      {show ? (
        <Otp />
      ) : (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Subscribe now!</h1>
              <p className="py-6 text-lg">
                Oh hey, look down there! Just pop in your email, and I’ll send
                you an OTP to get you all signed up. Simple, right? Go on, don’t
                keep me waiting! Heh heh!
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn btn-primary text-lg"
                    disabled={disable}
                  >
                    {disable ? "wait..." : "Subscribe"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Promote />
        </div>
      )}
    </>
  );
};

export default Sub;
