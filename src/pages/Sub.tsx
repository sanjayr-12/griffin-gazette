import { useState } from "react";
import Otp from "../components/Otp";
import toast, { Toaster } from "react-hot-toast";
import axios, { AxiosError } from "axios";

const Sub = () => {
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (!email || email.trim() === "") {
      toast.error("Email is required.");
      return;
    }
    try {
      setDisable(true);
      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) {
        throw new Error("API URL is not defined.");
      }
      const response = await axios.post(apiUrl, {
        email,
      });
      localStorage.setItem("email", email);
      setShow(true);
      toast.success(response.data.message);
    } catch (error) {
      if (error instanceof AxiosError) {        
        toast.error(error?.response?.data?.error || "Server is down");
      } else {
        toast.error("something went wrong");
      }
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
        </div>
      )}
    </>
  );
};

export default Sub;
