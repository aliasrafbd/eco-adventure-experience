import { Outlet, useLoaderData } from "react-router-dom";
import SingleAdventure from "../components/SingleAdventure";
import TravelerStories from "../components/TravelerStories";
import UpcomingEvents from "../components/UpcomingEvents";
import DynamicTitle from "../hooks/DynamicTitle";
import Banner from "../components/Banner";

const Home = () => {

    DynamicTitle();

    const { ecoAdventures, travelerStories, upcomingEvents } = useLoaderData();

    return (
        <div className="">
            <div>
                <Banner ecoAdventures={ecoAdventures}></Banner>
            </div>
            <h2 data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000" className="my-8 flex justify-center items-center md:text-4xl text-3xl text-center my-28 font-bold">Find your Best Adventuring Events</h2>
            <div className="w-10/12 mx-auto grid  grid-cols-1 gap-12 lg:grid-cols-2 ">
                {
                    ecoAdventures.slice(0,7).map((adventure, idx) => <SingleAdventure key={idx} adventure={adventure} ></SingleAdventure>)
                }
            </div>
            <TravelerStories travelerStories={travelerStories}></TravelerStories>

            <div>
                <UpcomingEvents upcomingEvents={upcomingEvents}></UpcomingEvents>
            </div>
        </div>
    );
};

export default Home;