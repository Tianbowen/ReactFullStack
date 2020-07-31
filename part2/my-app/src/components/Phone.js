import React from "react";
import '../phonebook.css'

const label = "delete";

const Phone = ({ phonebook, handleDelete }) => {
  return (
    <li className='note'>
      {phonebook.name}--{phonebook.phone} 操作：
      <button onClick={handleDelete}>{label}</button>
    </li>
  );
};

export default Phone;
