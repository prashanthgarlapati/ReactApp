import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDeletes, onToggles }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggles(task.id)}>
            <h3>{task.text}
                <FaTimes style={{ color: 'red' }}
                    onClick={() => onDeletes(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
