import React from 'react';
import { addToDb } from '../../../storage/fakedb';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast';

const BookingModals = ({setModal}) => {
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const ticketType = form.ticketType.value;
        const description = form.description.value;

        const booking = {
            id: uuidv4(), // Generate a unique ID for the booking
            ticketType,
            description,
        };

        addToDb(booking.id, booking); // Save booking information in the database
        setModal(false);
        toast.success('success')
        

        console.log('Booking:', booking);
    };

    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <form onSubmit={handleBooking} className="grid gap-7 grid-cols-1 mt-10">
                        <input name="ticketType" type="text"  placeholder="Ticket Type" required className="input input-bordered w-full" />
                        <input name="description" type="text" placeholder="Description" required className="input input-bordered w-full" />

                        <input className="btn btn-accent w-full" type="submit" value="Submit" />
                        {/* <label className="btn btn-accent w-full" htmlFor="my-modal"><input  type="submit" value="Submit" /></label> */}
                    </form>
                    
                </div>
            </div>
        </>
    );
};

export default BookingModals;
