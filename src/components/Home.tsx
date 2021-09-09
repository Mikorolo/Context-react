import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import UserPage, { UserContext } from "./UserPage";

const users = ['Client', 'Employee', 'Owner']

function getRandomInt(max:number, min:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Home = () => {
    const [user, setUser] = useState('Normal User');
    useEffect(() => {

    },[user]);
    return (
        <UserContext.Provider value={user}>
            <div>
                <Button onClick={() => setUser(users[getRandomInt(2, 0)])}>Change User</Button>
                <UserPage />
                {console.log(user)}
            </div>
        </UserContext.Provider>
    );
};

export default Home;

