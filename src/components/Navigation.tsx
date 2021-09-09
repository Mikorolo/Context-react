import React, {FC} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navigation:FC = () => {
    return (
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Brand href="/" className='ml-5'>Home</Navbar.Brand>
                </Navbar>
    );
};

export default Navigation;