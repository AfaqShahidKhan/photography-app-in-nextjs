const Hero = ({ heading, message }) => {
  return (
    <>
      {/* I made this component to design the hero section of every page */}
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-conter bg-cover custom-img">
        {/*overlay  */}
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/70 z-[2]" />
        <div className="p-5  mt-[-10rem] text-white z-[2]">
          <h2 className="text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
          <button className="px-8 py-2 border">Book</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
