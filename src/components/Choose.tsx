const Choose = () => {
  return (
    <div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">OTP Subscribe</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            defaultChecked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Easy Subscribe</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
          />
        </label>
      </div>
    </div>
  );
};

export default Choose;
