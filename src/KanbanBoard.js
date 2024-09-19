
import React from 'react';
import Ticket from './Ticket';

function KanbanBoard({ tickets, users, groupBy, sortBy }) {
  const groupedTickets = groupTickets(tickets, users, groupBy);
  const sortedTickets = sortTickets(groupedTickets, sortBy);

  return (
    <div className="kanban-board">
      {Object.keys(sortedTickets).map(group => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          {sortedTickets[group].map(ticket => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

const groupTickets = (tickets, users, groupBy) => {
  const grouped = {};

  tickets.forEach(ticket => {
    let groupKey;
    if (groupBy === 'status') {
      groupKey = ticket.status;
    } else if (groupBy === 'user') {
      const user = users.find(u => u.id === ticket.userId);
      groupKey = user ? user.name : 'Unassigned';
    } else if (groupBy === 'priority') {
      groupKey = priorityText(ticket.priority);
    }

    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(ticket);
  });

  return grouped;
};

const sortTickets = (groupedTickets, sortBy) => {
  const sorted = {};

  Object.keys(groupedTickets).forEach(group => {
    sorted[group] = groupedTickets[group].sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority;
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  });

  return sorted;
};

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

export default KanbanBoard;
