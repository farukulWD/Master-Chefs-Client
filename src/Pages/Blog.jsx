import React from "react";
import NavigationBar from "../Component/Shared/Navigationbar";
import Footer from "../Component/Shared/Footer";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div ref={ref}>
      <h2>This is blog pages</h2>
      </div>
      <Pdf targetRef={ref} filename="masterChefs.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
