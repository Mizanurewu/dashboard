import React, { useState, useEffect } from 'react';
import { updateInDb } from '../../../storage/fakedb';

const UpdateModal = ({ ticket, setIsModalOpen, handleUpdate, selectedTicketId }) => {
    const { id, ticketType: initialTicketType, description: initialDescription } = ticket;
    const [ticketType, setTicketType] = useState(initialTicketType);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedTicket = {
            id: selectedTicketId,
            ticketType,
            description,
        };

        handleUpdate(updatedTicket);
        setIsModalOpen(false);
    };

    useEffect(() => {
        setTicketType(initialTicketType);
        setDescription(initialDescription);
    }, [ticket]);

    return (
        <>
            <input type="checkbox" id="update-modal" className="modal-toggle" checked={true} />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <form onSubmit={handleSubmit} className="grid gap-7 grid-cols-1 mt-10">
                        <input
                            name="ticketType"
                            value={ticketType}
                            onChange={(event) => setTicketType(event.target.value)}
                            type="text"
                            placeholder="Ticket Type"
                            className="input input-bordered w-full"
                        />
                        <input
                            name="description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            type="text"
                            placeholder="Description"
                            className="input input-bordered w-full"
                        />

                        <input name="id" defaultValue={id} hidden type="text" />

                        <input className="btn btn-accent w-full" type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateModal;
