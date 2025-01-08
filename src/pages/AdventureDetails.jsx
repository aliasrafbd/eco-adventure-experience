import { useLoaderData, useParams } from "react-router-dom";
import ModalComponent from "../components/ModalComponent";

const AdventureDetails = () => {

    const { adId } = useParams();

    const handleCombinedClick = () => {
        talkToExpert();

    };

    let startHour = 10; //10 AM
    let endHour = 20; // 08 PM

    const talkToExpert = () => {


        const now = new Date();
        const currentHour = now.getHours();

        if (currentHour >= startHour && currentHour < endHour) {
            const meetLink = "https://meet.google.com/jkj-srax-nev";

            window.open(meetLink, "_blank");
        }
        else {
            handleShowModal();
        }


    }

    const handleShowModal = () => {
        const modal = document.getElementById('my_modal_5');
        modal.showModal();
    }

    const ecoAdventures = useLoaderData();
    const SingleAdventure = ecoAdventures.find(ecoAdventure => ecoAdventure.id == adId)

    const { id, adventure_title, image, category_name, short_description, adventure_cost, booking_availability, location, duration, adventure_level, included_items, eco_friendly_features, max_group_size, special_instructions } = SingleAdventure;

    return (
        <div className="mb-16 border-b-2 pb-16">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-12">{adventure_title}</h1>
                <img
                    src={image}
                    alt={adventure_title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
                />

                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-blue-600 mb-2">
                        Category: {category_name}
                    </h2>
                    <p className="text-gray-700 mb-4">{short_description}</p>
                    <p className="text-gray-800">
                        <strong>Cost:</strong> ${adventure_cost}
                    </p>
                    <p className="text-gray-800">
                        <strong>Booking Availability:</strong> {booking_availability ? 'Available' : 'Not Available'}
                    </p>
                    <p className="text-gray-800">
                        <strong>Location:</strong> {location}
                    </p>
                    <p className="text-gray-800">
                        <strong>Duration:</strong> {duration}
                    </p>
                    <p className="text-gray-800">
                        <strong>Adventure Level:</strong> {adventure_level}
                    </p>
                    <p className="text-gray-800">
                        <strong>Max Group Size:</strong> {max_group_size}
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Included Items</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        {included_items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Eco-Friendly Features</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        {eco_friendly_features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Special Instructions</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        {special_instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                </div>
                <button className="px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-lg transform hover:scale-105 transition duration-300 block mx-auto mt-12"
                    onClick={handleCombinedClick}
                >
                    Talk with Expert</button>
            </div>
            <ModalComponent></ModalComponent>
        </div>
    );
};

export default AdventureDetails;