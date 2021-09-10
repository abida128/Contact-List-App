import React from 'react';

import Card from 'react-bootstrap';
import Button  from 'react-bootstrap/Button';
import User from './components/User/User'
import  { useState, useEffect} from "react";

import './App.css';



function App() {


  const[userData, setUserData] = useState([]);
  const[userAge, setUserAge] = useState('');
  useEffect(() => {
      fetch('https://randomuser.me/api/?results=10')
      .then(results => results.json())
      .then(data =>{
          console.log(data)
          setUserData(data.results);
      });
  },[])
  return(
    <>
    <div className="header">Contact Listing App</div>
      {
      userData.map((user) => (
        <div className="card">
         
          <div className="col-lg-12">    
            <img src={user.picture.large} alt="user-img"></img>
          </div>
          <div class="col-lg-4">
            <div class="card-body"  >
              <h4 >Name: {user.name.first} {user.name.last} </h4>
              <h4 >Gender: {user.gender} </h4>
              <h4 >Email: {user.email} </h4>
              <h4 >Age: {userAge} </h4>
              <button className="btn btn-primary" onClick = {() => setUserAge((user.dob.age))}>Toggle Age</button>
            </div>
          </div>
        </div>
        
      ))}
    </>
);



}


export default App;
