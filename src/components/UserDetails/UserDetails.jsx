import { Component } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import * as api from '../../lib/api';


// const UserDetails = () => {
//     let params = queryString.parse(this.props.location.search)
//     console.log(params);
//     return (
//         <div>
//             <Link to='/userData'>
//                 <Button text="Go Back" />
//             </Link>
//             {/* <div>{props.userData}</div> */}
//         </div>
//     )

// }


class UserDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email,
            phone: this.props.phone,
            isDisabled: true
        }
    }
    componentDidMount() {
        this.getUserDetails().then(userData => this.setState({ userData }));
    }

    getUserDetails = () => {
        const params = queryString.parse(this.props.location.search)
        return api.getUserDetails(`tasks?id=${params.userid}`);
    }


    onChange = (event) => {
        // const value = event.target.value;
        //  this.setState({ firstName: value })
        this.setState({ [event.target.name]: event.target.value });
    }

    renderUserDetails = () => {
        const { userData } = this.state;
        console.log(userData);
        return userData && userData.map(user => (
            // <fieldset id="userForm" >
            <form key={`userRow${userData.userid}`}>
                <div>
                    <label>firstName: </label>
                    <input name="firstName" value={user.firstName} onChange={this.onChange} disabled={this.state.isDisabled} />
                </div>
                <div>
                    <label>lastname: </label>
                    <input name="lastName" value={user.lastName} onChange={this.onChange} disabled={this.state.isDisabled} />

                </div>
                <div>
                    <label>email: </label>
                    <input name="email" value={user.email} ref="email" onChange={this.onChange} disabled={this.state.isDisabled} />
                </div>
                <div>
                    <label>phone: </label>
                    <input name="phone" defaultValue={user.phone} ref="phone" onChange={this.onChange} disabled={this.state.isDisabled} />
                </div>
            </form>
            // </fieldset>

        ));
    };

    editUserDetails = () => {
        this.setState({ isDisabled: false })

    }

    saveUserEdit = async (event) => {
        event.preventDefault();
        // POST call here with user data
        // const userData = this.state.userData;
        const userdata = {
            firstName: this.state.value,
            lastName: this.state.value,
            email: this.state.userData[0].email,
            phone: this.state.userData[0].phone
        }
        await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userdata),
        })
        console.log('api call');
    }

    render() {
        const userDetails = this.renderUserDetails();
        console.log(userDetails);
        return (
            <div>
                <Link to='/userData'>
                    <Button text="Go Back" />
                </Link>
                <Button onClick={this.editUserDetails} text="Edit User" disabled={!!this.state.isDisabled} />
                <div >{userDetails}</div>
                <Button onClick={this.saveUserEdit} text="Save" />
            </div>
        )
    }
    // )
}

export default UserDetails