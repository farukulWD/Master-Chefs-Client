import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../Component/Card/ChefsCard';
import { Circles } from 'react-loader-spinner';

const Home = () => {
    const chefs = useLoaderData();
    
    
    return (
        <div>
            {/* Our chefs section */}
            <section className='py-5 px-4'>
            <h2 className='text-center text-warning text-6xl font-bold mt-10 mb-7'>Our chefs</h2>
            <p className='text-center mx-auto w-[50%] mb-16'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae saepe aliquam sint. Eos sapiente, eligendi molestias vel corrupti obcaecati deserunt!</p>
            <div className='my-4 grid md:grid-cols-3 gap-5 md:gap-10'>
                {
                    chefs.map(chef=><ChefsCard key={chef.id}
                    chef={chef}></ChefsCard>)
                }
            </div>
            </section>

        </div>
    );
};

export default Home;