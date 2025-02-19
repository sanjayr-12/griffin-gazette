import { useStore } from "../store/store";

const Choose = () => {
  const setOtp = useStore((state) => state.setOtp);
  const setSingle = useStore((state) => state.setSingle);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;
    console.log(option);

    if (option === "otp") {
      setOtp(true);
      setSingle(false);
    } else if (option === "single") {
      setOtp(false);
      setSingle(true);
    }
  };

  return (
    <div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">OTP Subscribe</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            value="otp"
            defaultChecked
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Easy Subscribe</span>
          <input
            type="radio"
            name="radio-10"
            value="single"
            className="radio checked:bg-blue-500"
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Choose;
