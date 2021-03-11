import React, { Component } from 'react';
import Button from '../Button/Button';
import * as api from '../../lib/api';
import { Link } from 'react-router-dom';
import './UserDataTable.css';
import editbtn from '../../assets/edit.png';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }

    componentDidMount() {
        this.getUserDataPromise().then(userData => this.setState({ userData }));
    }


    getUserDataPromise = () => {
        return api.getUserDetails('tasks');
    }

    gotoUserDetails(id) {
        console.log('selectedId', id);
        this.props.history.push({ pathname: '/userDetails', search: `?userid=${id}` });
    }

    renderUserRows = () => {
        const { userData } = this.state;
        console.log(userData);
        return userData && userData.map(user => (
            <tr onClick={() => this.gotoUserDetails(user.id)} key={`userRow${user.id}`}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td ><img className="edit-img" src={editbtn} alt="editIcon" /></td>
            </tr>
        ));
    };


    render() {
        const userRows = this.renderUserRows();
        console.log('rows', userRows);
        return (
            <div>
                <Link to="/">
                    <Button text="Back to Users" />
                </Link>
                <p>User Data Table</p>
                <table >
                    <thead>
                        <tr >
                            <td>firstName</td>
                            <td>lastName</td>
                            <td>email</td>
                            <td>phone</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {userRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserDetails;