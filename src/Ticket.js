
import React from 'react';

function Ticket({ ticket }) {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {priorityText(ticket.priority)}</p>
    </div>
  );
}

const priorityText = (priority) => {
  switch (priority) {
    case 4: return 'Urgent';
    case 3: return 'High';
    case 2: return 'Medium';
    case 1: return 'Low';
    case 0: return 'No priority';
    default: return 'Unknown';
  }
};

export default Ticket;
