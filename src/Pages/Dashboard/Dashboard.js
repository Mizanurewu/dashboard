import React from 'react';

const Dashboard = () => {
    const tickets =localStorage;
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Service</th>

                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;