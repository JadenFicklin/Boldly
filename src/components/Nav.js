import { Link } from 'react-router-dom';
import React from 'react';

function Nav() {
    return (
        <div className="w-full flex">
            <Link className="m-3" to="/">
                Home
            </Link>
            <Link className="m-3" to="/about">
                About
            </Link>
            <Link className="m-3" to="/findboldly">
                Find boldly
            </Link>
            <Link className="m-3" to="/foodservices">
                Food services
            </Link>
            <Link className="m-3" to="/products">
                Products
            </Link>
        </div>
    );
}

export default Nav;
