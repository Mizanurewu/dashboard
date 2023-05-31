import React, { useState, useEffect } from 'react';
import Ticket from './Ticket/Ticket';
import BookingModal from './BookingModal/BookingModal';
import { removeFromDb, updateInDb } from '../../storage/fakedb';

const Dashboard = () => {
    const [tickets, setTickets] = useState([]);
    const [modal, setModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleAddTicket = () => {
        setModal(true);
    };
    const handleUpdate = (updateTicket) => {
        const id = updateTicket.id;
        setIsModalOpen(true);
        console.log(updateTicket);
        updateInDb(updateTicket);

        // Update the tickets array with the modified ticket
        const updatedTickets = tickets.map((ticket) => {
            if (ticket.id === id) {
                return updateTicket;
            }
            return ticket;
        });

        setTickets(updatedTickets);
    };
    const handleDelete = (id) => {
        console.log(id);
        removeFromDb(id);

        const remaining = tickets.filter((ticket) => ticket.id !== id);
        console.log(remaining);
        setTickets(remaining);
    };

    useEffect(() => {
        // Retrieve bookings data from local storage
        const storedBookings = localStorage.getItem('shopping-cart');

        if (storedBookings) {
            const parsedBookings = JSON.parse(storedBookings);
            setTickets(parsedBookings);
        }
    }, []);

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Ticket Type</th>
                            <th>Description</th>
                            <th>Action</th>
                            <th>
                                <label
                                    htmlFor="my-modal"
                                    onClick={handleAddTicket}
                                    className="btn btn-primary text-white"
                                >
                                    Add ticket
                                </label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket, index) => (
                            <Ticket
                                key={index}
                                ticket={ticket}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                                setIsModalOpen={setIsModalOpen}
                                isModalOpen={isModalOpen}
                            />

                        ))}
                    </tbody>
                </table>
                {modal && <BookingModal
                    setModal={setModal} //to close the modal
                />}
            </div>
        </div>
    );
};

export default Dashboard;
