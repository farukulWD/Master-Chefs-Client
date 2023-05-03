import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefsCard from "../Component/Card/ChefsCard";
import { Circles } from "react-loader-spinner";
import Contact from "../Component/Contact";
import Client from "../Component/Client";

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
          <section className="py-5 md:px-4">
            <h2 className="text-center text-warning text-3xl md:text-6xl font-bold mt-10 mb-7">
              Our chefs
            </h2>
            <p className="text-center mx-auto md:w-[50%] mb-16">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae saepe aliquam sint. Eos sapiente, eligendi molestias
              vel corrupti obcaecati deserunt!
            </p>

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
