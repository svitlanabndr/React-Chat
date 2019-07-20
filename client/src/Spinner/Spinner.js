import './Spinner.css';
import React from 'react';
import logo from './logo.png';

export default function Spinner (props) {
    return <div className='loading'><img className='loading-logo' src={logo} alt="Logo" /></div>
}