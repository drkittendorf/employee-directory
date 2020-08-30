import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import "./style.css"

function Header() {
    return (
        <Navbar bg='dark' variant='dark' className="display-flex content-center mb-4">
            <Navbar.Brand href="/" className='text-black' >
                <h1>Dale's Employee Directory</h1>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header; 