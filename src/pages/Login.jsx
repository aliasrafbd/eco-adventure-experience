import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { auth, AuthContext } from '../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DynamicTitle from '../hooks/DynamicTitle';
// import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {

    DynamicTitle();

    const { user, setUser, setAuthEmail, signInUser, googleSignIn } = useContext(AuthContext);

    const emailRef = useRef();

    const [error, setError] = useState({})

    const location = useLocation();

    const navigate = useNavigate();


    const [localEmail, setLocalEmail] = useState("");

    const handleEmailChange = (e) => {
        setLocalEmail(e.target.value);
        setAuthEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        signInUser(email, password)
            .then((result) => {
                setUser(result.user);
                toast("SuccessFully Login");
                navigate(location?.state ? location.state : "/");

            })
            .catch((err) => {
                setError({ ...error, login: err.code });
                toast.warning("Error in Login, please provide correct email and password")
            });
    }

    // const handleForgetPassword = () => {
    //     navigate("/forgetpassword");
    //   };

    const handleLoginGoogle = () => {
        googleSignIn()
            .then(res => {
                navigate(location?.state ? location.state : "/");
            })
    }


    return (
        <div>
            <div className="bg-updateProfile w-screen bg-no-repeat bg-cover bg-center -mt-8 mb-16 min-h-[700px] flex justify-center items-center">
                <div className="opacity-1 w-[85%] card md:w-full bg-transparent px-6 py-12 max-w-lg shrink-0">
                    <h2 className="font-semibold text-center text-2xl">Login your account</h2>
                    <form onSubmit={handleSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                value={localEmail}
                                onChange={handleEmailChange}
                                name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/forgetpassword"><button className='text-blue-500 hover:text-blue-800' >Forgot Password?</button></Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transition duration-300">Login</button>

                        </div>
                        <p>
                            {error.login ? <p className="text-red-600">{error.login}</p> : ""}
                        </p>
                        <p>Do not have a account? Please <Link className='text-blue-800 hover:font-bold' to="/register">Register</Link> </p>
                    </form>
                    <button onClick={handleLoginGoogle} className="btn bg-white hover:bg-yellow-300 w-3/6 mx-auto">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;