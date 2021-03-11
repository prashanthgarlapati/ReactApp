import React from 'react';
import UserForm from '../UserForm/UserForm.component';
import TaskForm from '../UserForm/TaskForm.component';

class FormWizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            userDetails: {},
            tasks: [],
            isDisabled: true
        }
    }


    handleChange = (fieldType) => (event) => {
        const value = event.target.value;
        if (event.target.name === 'firstName') {
            if (value === '' || value === null) {
                this.setState({
                    firstnameError: true
                })
            } else {
                this.setState({
                    firstnameError: false,
                    firstName: value
                })
            }
        }
        if (event.target.name === 'lastName') {
            this.setState({ lastName: value })
        }
        if (event.target.name === 'email') {
            this.setState({ email: value })
        }
        if (event.target.name === 'phone') {
            this.setState({ phone: value })
        }
        if (this.state.firstnameError === false) {
            this.setState({
                isDisabled: false
            })
        }
        // switch (fieldType) {
        //     case 'FirstName':
        //         this.setState({ firstName: value });
        //         break;
        //     case 'LastName':
        //         this.setState({ lastName: value });
        //         break;
        //     case 'email':
        //         this.setState({ email: value });
        //         break;
        //     case 'phone':
        //         this.setState({ phone: value });
        //         break;
        //     default:
        // }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        // POST call here with user data
        const userdata = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone
        }
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userdata),
        })
        console.log('api call');
        this.props.history.push('/userData');
        // alert(JSON.parse(res))
        // const data = res.json()
        // console.log(data);
        //this.setTasks([...userdata, data])
    }

    setTasks = (data) => {
        this.setState({ userData: data });
    }

    render() {
        const values = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            fNameError: this.state.firstnameError,
            isDisabled: this.state.isDisabled
        };
        console.log(values);
        return (
            <p>Hiiii</p>,
            <UserForm values={values} onChange={this.handleChange} onSubmit={this.handleSubmit} />
            // { this.state.activeFormPage === 'user' && <UserForm firstName={this.state.firstName} onChangeFirstName={this.onChangeFirstName} /> }
            // { this.state.taskFormPage === 'task' && <TaskForm firstName={this.state.firstName} /> }
        )
    }

}

export default FormWizard