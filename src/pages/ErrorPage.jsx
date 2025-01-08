import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
        <div>
            <Link to="/"><button className='btn m-4 btn-primary text-black'>Go Back</button></Link>
        </div>
        <div className='flex justify-center items-center min-h-screen text-3xl font-bold'>
            Error! 404, Not Found
        </div>
        </>
    );
};

export default ErrorPage;