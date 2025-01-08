import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SingleAdventure = ({ adventure }) => {

    const { user } = useContext(AuthContext);

    const { id, adventure_title, image, category_name, short_description, adventure_cost, booking_availability, location, duration, adventure_level, included_items, eco_friendly_features, max_group_size, special_instructions } = adventure;

    return (
        <div data-aos="zoom-in" className='w-full mx-auto flex flex-col space-y-2 rounded-lg p-4 text-center'>
            <h2 className='font-bold text-xl my-4'>{adventure_title}</h2>
            <img className='w-full rounded-2xl h-[300px]' src={image} alt="" />
            <h4 className='font-bold'>Eco Freiendly Features:</h4>
            <div className='flex-grow'>
                {
                    eco_friendly_features.map((ecoFeature, idx) => <span key={idx}>{ecoFeature}, </span>)
                }
            </div>
            <div>
                <Link className='btn my-2 btn-warning' to={`/adventuredetails/${id}`}>Explore Now</Link>
            </div>


        </div>
    );
};

export default SingleAdventure;