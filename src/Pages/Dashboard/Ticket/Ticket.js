import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import UpdateModal from '../BookingModal/UpdateModal';

const Ticket = ({ ticket, handleDelete, handleUpdate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { id, ticketType, description } = ticket;

    const handleClickUpdate = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <tr>
                <td>
                    <h1>{ticketType}</h1>
                </td>
                <td>
                    <h1>{description}</h1>
                </td>
                <td>
                    <button onClick={() => handleDelete(id)} className="btn">Delete</button>
                    <button onClick={handleClickUpdate} className="btn btn-primary text-white">
                        Update
                    </button>
                </td>
            </tr>
            {isModalOpen && (
                <UpdateModal
                    ticket={ticket}
                    setIsModalOpen={setIsModalOpen}
                    handleUpdate={handleUpdate}
                    selectedTicketId={id}
                />
            )}
        </>
    );
};

export default Ticket;
