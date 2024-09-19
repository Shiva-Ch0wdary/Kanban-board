
import React, { useState } from 'react';
import { ReactComponent as DisplayIcon } from './icons/Display.svg';

function Header({ onGroupChange, onSortChange }) {
  const [showOptions, setShowOptions] = useState(true); 
  const handleDisplayClick = () => {
    setShowOptions(!showOptions); 
  };

      
  return (
    <div className="header">
      <button onClick={handleDisplayClick}>
        <DisplayIcon className="icon" />
        <span className="name-label"> Display</span> 
      </button>
      
      {showOptions && ( 
        <>
          <label>Group By: </label>
          <select onChange={(e) => onGroupChange(e.target.value)}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>

          <label>Sort By: </label>
          <select onChange={(e) => onSortChange(e.target.value)}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </>
      )}

      
    </div>
  );
}

export default Header;
