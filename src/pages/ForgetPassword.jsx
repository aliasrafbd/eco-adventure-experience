import React, { useContext, useRef } from 'react';
import { auth, AuthContext } from '../providers/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';


const ForgetPassword = () => {

    const { email } = useContext(AuthContext);

    const emailRef = useRef();
    console.log(emailRef?.current?.value);

    const resetPassword = () => {

        if (emailRef?.current?.value) {
            sendPasswordResetEmail(auth, emailRef?.current?.value)
                .then(() => {
                    toast.info("password reset email sent, navigating to gmail in 2 sec")
                    setTimeout(() => {
                        const gmailUrl = "https://mail.google.com";
                        window.open(gmailUrl, "_blank");
                    }, 2000)
                })
        }
        else if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast.info("password reset email sent, navigating to gmail in 2 sec")
                    setTimeout(() => {
                        const gmailUrl = "https://mail.google.com";
                        window.open(gmailUrl, "_blank");
                    }, 2000)
                })
        }
    }

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="card bg-base-100 w-full px-6 py-12 max-w-lg shrink-0">
                    <h2 className="font-semibold text-center text-xl"> Is email Okay? click on Reset Password</h2>
                    <div className="form-control">
                        <label className="text-bold label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" ref={emailRef} defaultValue={email} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    </div>
                    <button
                        onClick={resetPassword}
                        className="btn w-2/5 mx-auto text-red-500">Reset Password</button>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;