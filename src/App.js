
import React, { useEffect, useState } from 'react';
import KanbanBoard from './KanbanBoard';
import Header from './Header';
import { fetchTickets } from './API';
import './styles.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status'); 
  const [sortBy, setSortBy] = useState('priority'); 

  useEffect(() => {
    const data = fetchTickets();
    setTickets(data.tickets);
    setUsers(data.users);
  }, []);

  const handleGroupChange = (groupOption) => {
    setGroupBy(groupOption);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  useEffect(() => {
    const savedGroupBy = localStorage.getItem('groupBy');
    const savedSortBy = localStorage.getItem('sortBy');
    if (savedGroupBy) setGroupBy(savedGroupBy);
    if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  return (
    <div>
      <Header onGroupChange={handleGroupChange} onSortChange={handleSortChange} />
      <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
}

export default App;
