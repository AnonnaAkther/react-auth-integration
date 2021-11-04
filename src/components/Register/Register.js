import React from 'react';
import { Link } from 'react-router-dom';

const Resister = () => {
    return (
        <div>
            <h2>Please Resister</h2>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Resister;