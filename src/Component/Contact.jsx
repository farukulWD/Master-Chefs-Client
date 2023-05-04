import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="mb-32 text-center text-gray-800">
      <div className="max-w-[700px] mx-auto px-3 lg:px-6">
        <h2 className="text-5xl font-bold mb-12 text-warning">Contact us</h2>
        <form>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <Link>
          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-warning text-white  leading-tight uppercase rounded shadow-md hover:shadow-lg   focus:outline-none focus:ring-0 text-lg transition duration-150 ease-in-out"
          >
            Send
          </button></Link>
        </form>
      </div>
    </section>
  );
};

export default Contact;
