import React from 'react';
import { useSelector } from 'react-redux';
import { Person } from './Person';
import { RootState } from './store';

function PersonData() {
  const person = useSelector((state: RootState) => state.person.data);
  const divStyle = {
    backgroundColor: '#0077B6',
    color: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
    marginTop: '20px',
  };
  
  if (!person) {
    return <div>No person data available.</div>;
  }
  

  return (
    <div>
      <h1>Person Data:</h1>
      <div style={divStyle}><strong>First Name:</strong> {person.firstName}</div>
      <div style={divStyle}><strong>Last Name:</strong> {person.lastName}</div>
      <div style={divStyle}><strong>Age:</strong> {person.age}</div>
      <div style={divStyle}><strong>Marital Status:</strong> {person.maritalStatus}</div>
    </div>
  );
}

export default PersonData;
