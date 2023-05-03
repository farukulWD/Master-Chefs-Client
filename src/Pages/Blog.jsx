import React from "react";
import NavigationBar from "../Component/Shared/Navigationbar";
import Footer from "../Component/Shared/Footer";
import Pdf from "react-to-pdf";
import Header from "../Component/Shared/Header";

const ref = React.createRef();

const Blog = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>

      <div className="text-right">
        <Pdf targetRef={ref} filename="masterChefs.pdf">
          {({ toPdf }) => (
            <button className="btn btn-warning" onClick={toPdf}>
              Download Pdf
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <h2>This is blog pages</h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
