import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPersonData } from './personSlice';
import { Person } from './Person';

function PersonForm() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [maritalStatus, setMaritalStatus] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const person: Person = {
      firstName,
      lastName,
      age,
      maritalStatus,
      nationality: ''
    };

    dispatch(setPersonData(person));

    setFirstName('');
    setLastName('');
    setAge(0);
    setMaritalStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(event) => setAge(parseInt(event.target.value))} />
      </div>
      <div>
        <label htmlFor="maritalStatus">Marital Status:</label>
        <input type="text" id="maritalStatus" value={maritalStatus} onChange={(event) => setMaritalStatus(event.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PersonForm;
