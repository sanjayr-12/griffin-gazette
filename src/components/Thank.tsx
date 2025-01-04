const Thank = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-center">Thank You!</h1>
          {/* <p className="py-6 text-lg text-center">
            Alright, that’s it—you’ve made it! You’re all set now. You’ll start
            receiving the topics daily at 11:10 PM. Sit back, relax, and enjoy!
          </p> */}
          <p className="py-6 text-lg text-center">
            Hey there, pals! Thanks for subscribing, but uh... bad news. Turns
            out, I'm totally broke—like, can't-even-buy-a-donut broke. So, no
            topics for now. Yep, I'm taking a little break. Don’t worry though,
            I’ll let you know when I’m back and ready to rock your inbox again!
            Until then, keep being awesome... or not, I dunno, heh heh!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thank;
