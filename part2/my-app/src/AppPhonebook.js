import React, { useState, useEffect } from "react";
import phoneService from "./services/phonebook";
import Phone from "./components/Phone";
import './phonebook.css'

const Notification=({message})=>{
  if (message===null) {
    return null;
  }

  return (<div className='error'>
    {message}
  </div>)
}



const AppPhonebook = () => {
  const [phonebooks, setPhonebooks] = useState([]);
  const [newPhone, setNewPhone] = useState("");
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState(false);
  const [filterName, setFliterName] = useState("");


  const showAllPhonebook =
    filter == false
      ? phonebooks
      : phonebooks.filter((x) => {
          return x.name.toLowerCase().search(filterName.toLowerCase()) > -1;
        });

  const handleNewPhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleFilterNameChange = (event) => {
    console.log(event.target.value, filterName);
    if (event.target.value.length > 0) {
      console.log(true);
      setFliterName(event.target.value);
      setFilter(true);
    } else {
      console.log(false);
      setFliterName("");
      setFilter(false);
    }
  };

  const handleAddPhonebookSubmit = (event) => {
    event.preventDefault();

    const newPhonebook = {
      name: newName,
      phone: newPhone,
    };

    if (!phonebooks.some((x) => x.phone === newPhone)) {
      phoneService.create(newPhonebook).then((returnedData) => {
        setPhonebooks(phonebooks.concat(returnedData));
      });
    } else {
      //update
      const phone = phonebooks.find((x) => x.phone === newPhone);
      console.log(newPhone, phone);
      const updateObject = { ...phone, name: newName };

      phoneService
        .update(updateObject.id, updateObject)
        .then((returnedData) => {
          setPhonebooks(
            phonebooks.map((p) => (p.id != updateObject.id ? p : returnedData))
          );
        });
    }
  };

  const handleDeletePhone = (deleteObject) => {
    const message = `Do you really want to delete '${deleteObject.name}'`;
    if (window.confirm(message)) {
      phoneService
        .deleteId(deleteObject.id)
        .then((returnedData) => {
          setPhonebooks(phonebooks.filter((p) => p.id != deleteObject.id));
        })
        .catch((error) => {
          alert(`delete error ${error}`);
        });
    }
  };

  const getPhonebooks = () => {
    phoneService.getAll().then((initalData) => {
      setPhonebooks(initalData);
    });
  };

  useEffect(getPhonebooks, []);

  return (
    <div>
      <div>
        <h1>PhoneBooks</h1>
      </div>
      <div>
        <h2>Search Phone</h2>
        <input value={filterName} onChange={handleFilterNameChange} />
      </div>
      <hr />
      <div>
        <h2>New PhoneBook</h2>
        <div>
          <form onSubmit={handleAddPhonebookSubmit}>
            <div>
              name: <input value={newName} onChange={handleNewNameChange} />
            </div>
            <div>
              phone: <input value={newPhone} onChange={handleNewPhoneChange} />
            </div>
            <button type="submit">Add New Phone</button>
          </form>
        </div>
      </div>
      <hr />
      <div>
        <ul>
          {showAllPhonebook.map((phone) => (
            <Phone
              key={phone.id}
              phonebook={phone}
              handleDelete={() => handleDeletePhone(phone)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppPhonebook;
