import React from 'react';

class TaskForm extends React.Component {
    render() {
        return (
            <input onChange={this.props.onChangeFirstName} value={this.props.firstName} />
        )
    }
}

export default TaskForm