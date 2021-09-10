import userEvent from '@testing-library/user-event';
import React, {useState, useEffect} from 'react';

function User({
    image,
    firstName,
    lastName,
    gender,
    email,
    age,
})
    {

return(
    <>
        <img src={image} alt="user-image"></img>
        <div>Name:{firstName} {lastName}</div>
        <div>Email:{email}</div>
        <div>Gender: {gender}</div>
        <div>Age: {age}</div>
    </>
);
}

export default User;
