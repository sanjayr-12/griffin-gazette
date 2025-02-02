import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const handleClick = () => {
    navigate("/subscribe");
  };
  const handleImageLoad = () => {
    setLoaded(true);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        {!loaded && <div className="skeleton w-[14rem] h-72"></div>}
        <img
          src="https://i.ibb.co/xMXzvBg/peter.jpg"
          alt="chat avatar"
          className="max-w-sm rounded-lg shadow-2xl max-h-72"
          onLoad={handleImageLoad}
          style={loaded ? {} : { display: "none" }}
        />
        <div className="flex flex-col justify-center text-center w-full">
          <h1 className="text-4xl font-bold">
            Welcome to the Griffin Gazette!
          </h1>
          <p className="py-6 text-lg">
            Hey there! This is the Griffin Gazette, where I, Peter Griffin,
            share two random tech topics with you every day. Want in? Hit that
            subscribe button and let’s get started! Heh heh!
          </p>
          <button
            className="btn btn-primary mx-auto text-lg"
            onClick={handleClick}
          >
            Subscribe...
          </button>
          <br />
          <a
            href="https://chat.omgpeter.tech"
            className="btn btn-ghost mx-auto text-lg"
          >
            {" "}
            <button>Chat with me</button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
