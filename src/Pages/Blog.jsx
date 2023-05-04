import React from "react";
import NavigationBar from "../Component/Shared/Navigationbar";
import Footer from "../Component/Shared/Footer";
import Pdf from "react-to-pdf";
import Header from "../Component/Shared/Header";
import BlogHeader from "../Component/Shared/BlogHeader";

const ref = React.createRef();

const Blog = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <BlogHeader></BlogHeader>
      <div className="text-center my-6">
        <Pdf targetRef={ref} filename="masterChefs.pdf">
          {({ toPdf }) => (
            <button className="btn btn-warning" onClick={toPdf}>
              Download Pdf
            </button>
          )}
        </Pdf>
      </div>
      <div className="w-9/12 mx-auto" ref={ref}>
        <div className="my-10">
          <h1 className="text-black text-xl md:text-3xl mb-5 font-semibold">1.Tell us the differences between uncontrolled and controlled components</h1>
          <p>Uncontrolled components are those where the value is not controlled by React. Instead, the state is managed by the DOM. The values of these components are accessed through refs. Uncontrolled components are easier to implement and require less code, but they offer less control over the form</p>
          <p>
          Controlled components, on the other hand, are those where the value is controlled by React. The value is stored in the component state, and any change to the value triggers a state update. Controlled components allow for more control over the form and are useful when you need to manipulate the value of a form element based on other user interactions
          </p>
        </div>
        <div className="my-10">
          <h1 className="text-black text-xl md:text-3xl mb-5 font-semibold">2.How to validate React props using PropTypes ?</h1>
          <p>React PropTypes is a feature for runtime validation of props during development. PropTypes exports a range of validators that can be used to make sure the data you receive is valid. When an invalid value is provided for a prop,</p>
          
        </div>
        <div className="my-10">
          <h1 className="text-black text-xl md:text-3xl mb-5 font-semibold">3.Tell us the difference between nodejs and express js</h1>
          <p>Node.js is a platform for building server-side event-driven I/O applications using JavaScript Express.js is a framework based on Node.js that provides features for building web applications and APIs</p>
         
        </div>
        <div className="my-10">
          <h1 className="text-black text-xl md:text-3xl mb-5 font-semibold">4.What is a custom hook, and why will you create a custom hook?</h1>
          <p>Creating a custom hook can help my to keep my code modular, reduce duplication, and simplify my components. It can also make my code more readable and easier to maintain. Custom hooks allow my to encapsulate logic that would otherwise clutter my components and make them harder to understand.</p>
          <p>
          To create a custom hook, i simply write a function that uses React hooks like useState, useEffect, useContext, and useRef, and then export that function to be used in other components. By using custom hooks, i can write cleaner and more concise code, improve reusability, and promote code consistency across my application.
          </p>
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
