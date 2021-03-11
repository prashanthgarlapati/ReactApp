import React from 'react';
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NameForm = (props) => {
    const { onChange, onSubmit, values: { firstName, lastName, email, phone, fNameError, isDisabled } } = props;
    return (
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label>firstName</label>
                <input type="text" name="firstName" placeholder='Add Value' value={firstName} onChange={onChange()} />
                {fNameError ? <span style={{ color: "red" }}>Please Enter some value</span> : ''}
            </div>
            <div className='form-control'>
                <label>lastName</label>
                <input type='text' name="lastName" placeholder='Add Value' onChange={onChange('LastName')} value={lastName} />
            </div>
            <div className='form-control'>
                <label>email</label>
                <input type='text' name="email" placeholder='Add Value' onChange={onChange('email')} value={email} />
            </div>
            <div className='form-control'>
                <label>phone</label>
                <input type='text' name="phone" placeholder='Add Value' onChange={onChange('phone')} value={phone} />
            </div>
            <Button type="submit" text="Add User" disabled={isDisabled} />
            <Link to="/userData">
                <Button text="UserTable" />
            </Link>
        </form>
    );
}



export default NameForm