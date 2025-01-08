import React from 'react';
import DynamicTitle from '../hooks/DynamicTitle';
import { div } from 'framer-motion/client';

const UpcomingEvents = ({ upcomingEvents }) => {

    DynamicTitle();
    return (
        <div className='border-b-2 my-12'>
            <div className='w-10/12 mx-auto'>
                <section className="md:mb-8 md:mt-0 mb-0 mt-8 pt-16 pb-16 md:pt-6 md:pb-6">
                    <div className="container mx-auto text-center">
                        <h2 data-aos="fade-down" className="text-3xl font-bold mb-16 md:mb-8">Upcoming Eco-Friendly Events</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            {upcomingEvents.slice(0, 6).map((event, index) => (
                                <div data-aos="fade-down" key={index} className="bg-white border border-gray-100 mx-3 rounded-lg overflow-hidden">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-cyan-700 mb-2">{event.event_name}</h3>
                                        <p className="text-gray-600 mb-4">{event.date} | {event.location}</p>
                                        <p className="text-gray-700 mb-4 ">{event.description}</p>
                                        <p className="text-sm font-semibold text-gray-600">Max Participants: {event.max_participants}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UpcomingEvents;