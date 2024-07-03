import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../actions/userActions';

const UserForm = ({ existingUser }) => {
    const [user, setUser] = useState(existingUser || { name: '', email: '' });
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (user.id) {
            dispatch(updateUser(user));
        } else {
            dispatch(addUser(user));
        }
        setUser({ name: '', email: '' });
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <form onSubmit={handleSubmit}>
                            <input type="text"  name="name" value={user.name} onChange={handleChange} placeholder="Name" className='form-control'  required/>
                            <br></br>
                            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" className='form-control' required />
                            <br></br>
                            <button className='btn btn-primary' type="submit">{user.id ? 'Update' : 'Add'} User</button>
                        </form>
                    </div>
                </div>
            </div>


        </>

    );
};

export default UserForm;
