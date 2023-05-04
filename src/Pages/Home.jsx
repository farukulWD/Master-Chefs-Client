import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefsCard from "../Component/Card/ChefsCard";
import { Circles } from "react-loader-spinner";
import Contact from "../Component/Contact";
import Client from "../Component/Client";
import Header from "../Component/Shared/Header";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    // Simulate loading data with setTimeout

    fetch("https://master-chefs-server-farukulwd.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center mt-10">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperclassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
        <Header></Header>
          <section className="py-5 md:px-4">
            
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl text-warning md:text-7xl font-bold mb-5 ">
              Our chefs
              </h1>
              <h3 className="text-xl px-1 mb-5 font-light">
              Our passionate culinary team is made up of innovative and experienced professionals with years of experience in foodservice. Their work combines food science, technology and the culinary arts to imagine the future of food.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>

            <div className="my-4 grid md:grid-cols-3 gap-5 md:gap-10">
              {chefs.map((chef) => (
                <ChefsCard key={chef.id} chef={chef}></ChefsCard>
              ))}
            </div>
          </section>

          <Client></Client>

         <Contact></Contact>

          

          
        </>
      )}
    </div>
  );
};

export default Home;
