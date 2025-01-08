import { useContext, useRef } from "react";
import DynamicTitle from "../hooks/DynamicTitle";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const navigate = useNavigate();

    const { updateUserProfile } = useContext(AuthContext);

    DynamicTitle();

    const nameRef = useRef(null);
    const photoRef = useRef(null);

    const handleUpdate = () => {
        const name = nameRef.current.value;
        const photo = photoRef.current.value;

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                toast.success("Successfully Updated")
                navigate("/userprofile");
            })
            .catch((error) => {
            })
    };


    return (
        <div data-aos="fade-right" className="mb-12 bg-updateProfile w-screen bg-no-repeat bg-cover bg-center -mt-8 py-16 min-h-96">
            <div className="max-w-lg bg-cyan-400 lg:w-full w-[85%] p-2 border-y-8 border-red-400 mx-auto">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-bold label-text">Name</span>
                        </label>
                        <input type="text" ref={nameRef} name="name" placeholder="Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="font-bold label-text">Photo URL</span>
                        </label>
                        <input type="text" ref={photoRef} name="photo" placeholder="Photo-url" className="input input-bordered" required />
                    </div>
                    <div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-gradient-to-r from-red-400 to-green-500 text-white font-bold py-2 px-4 rounded w-[40%] lg:w-[20%] hover:from-green-500 hover:to-blue-500" onClick={handleUpdate} type="submit">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;