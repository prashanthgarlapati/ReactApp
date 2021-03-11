import React from 'react'
import Task from './Task'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import FinalPage from '../FinalPage/FinalPage';
// import Routes from '../Routing/routes'

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <div>
            {tasks.map((task, index) => (
                <Task key={index} task={task}
                    onDeletes={onDelete}
                    onToggles={onToggle} />
            ))}
            <Link to='/'>
                <Button className="Btn" text="Back To Home" />
            </Link>
            <Link to="/final">
                <Button className="Btn" text="GoTo Next Page" />
            </Link>
            {/* <Routes exact path="/final" component={FinalPage}></Routes> */}
        </div>
    )
}

export default Tasks
