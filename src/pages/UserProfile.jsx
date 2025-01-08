import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import DynamicTitle from "../hooks/DynamicTitle";
import Aos from "aos";

const UserProfile = () => {

    DynamicTitle()

    const { user, setUser, logOut } = useContext(AuthContext);
    
    return (
        <>
            <div className="bg-updateProfile w-screen bg-no-repeat bg-cover bg-center py-16 -mt-8 -mb-2">
                <div className="min-h-[300px] w-[90%] lg:w-full bg-transparent border-x-8 hover:border-green-500 border-red-700 md:px-28 px-4 my-4 p-12 max-w-[700px] mx-auto">

                    <div className="block md:flex gap-4 justify-center items-center my-4">
                        <div className="h-full md:w-[50%] flex md:block justify-center md:my-0 my-4">
                            {
                                user?.photoURL ? <img data-aos="zoom-in" className="h-56 w-56 rounded-full" src={user.photoURL} alt="" /> : <p className="flex  justify-center items-center text-3xl font-bold bg-white w-48 h-48 px-8 rounded-full">Upload <br />a photo</p>
                            }
                        </div>
                        <div className="w-[50%] gap-2">
                            <h3 data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" className="mb-6 font-bold text-4xl"><span className="text-3xl">Hello I am</span> <br /> <span className="text-blue-500">{user.displayName}</span></h3>
                            <p className="font-bold mt-4 text-xl">About Me</p>
                            {
                                user?.displayName ? <p><span className="font-bold">Name:</span> {user?.displayName && user.displayName}</p> : <p><span className="font-semibold"></span>Name: Not Available</p>
                            }
                            <p><span className="font-bold">Email:</span> {user.email}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center block text-center my-2">
                    <Link to="/updateprofile"><button className="btn mb-6 btn-secondary">Update Profile</button></Link>
                </div>
            </div>
        </>
    );
};

export default UserProfile;