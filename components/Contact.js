import React from "react";

const Contact = () => {
  return (
    <>
      {/* Here is the detail of how to contact me */}
      <div className="max-w-[1248px] m-auto p-4 h-screen">
        <h1 className="text-xl font-bold">Let's work togther</h1>
        <form className=" max-w-[688px] m-auto">
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border shadow-lg p-3 "
              type="text"
              placeholder="Name"
            />
            <input
              className="border shadow-lg p-3 "
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className="border shadow-lg p-3 w-full my-2 "
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="border shadow-lg p-3 w-full "
            cols="30"
            rows="10"
            placeholder="Massage"
          />
          <button className="border shadow-lg p-3 w-full mt-2 font-bold">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
