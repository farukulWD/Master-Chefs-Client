import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../Component/Card/ChefsCard';

const Home = () => {
    const chefs = useLoaderData();
    
    return (
        <div>
            {/* Our chefs section */}
            <section className='py-5 px-4'>
            <h2 className='text-center text-4xl font-bold'>Our chefs</h2>
            <div className='my-4 grid md:grid-cols-3 gap-5'>
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