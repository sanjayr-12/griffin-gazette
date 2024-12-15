import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Thank from "./Thank";
import Promote from "./Promote";

const Otp = () => {
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const otp = formData.get("otp");
    const email = localStorage.getItem("email");
    if (otp.trim() === "") {
      return;
    }
    try {
      setDisable(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}verify`,
        { otp, email }
      );
      setShow(true);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setDisable(false);
    }
  };
  return (
    <>
      {show ? (
        <Thank />
      ) : (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Enter Your OTP!</h1>
              <p className="py-6 text-lg">
                Alright, check your email for the OTP and enter it below. I need
                to verify it fast—you’ve only got 5 minutes before it expires.
                So hurry up! And hey, don’t reload the page, or we’ll have to
                start over!
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">OTP</span>
                  </label>
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter your otp"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn btn-primary text-lg"
                    disabled={disable}
                  >
                    {disable ? "Verifying..." : "Verify OTP"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Toaster />
          <Promote/>
        </div>
      )}
    </>
  );
};

export default Otp;
