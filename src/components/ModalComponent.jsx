import Aos from 'aos';
import React from 'react';

const ModalComponent = () => {


    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center mx-auto md:my-0 my-4 rounded-md w-[70%] md:w-full">
                    <p className='font-bold text-3xl'>Expert Meeting Time:</p> <br /> 
                    <p className='text-2xl text-red-400'>10 AM to 08 PM</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-primary">Close Modal</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ModalComponent;