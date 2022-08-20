import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
    return (
        <>
            { toDo && toDo
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map((task, index) => {
            return(
                <React.Fragment>
                <div className="col taskBg">
                    <div className={ task.completed ? "done" : ""}>
                    <span className="taskNumber">{ index + 1 }</span>
                    <span className="taskText">{ task.title }</span>
                    </div>
                    <div className="iconsWrap">
                    <span title='Complete / Not Complete' onClick={ (e) => markDone(task.id)}>
                        <FontAwesomeIcon icon={ faCircleCheck }></FontAwesomeIcon>
                    </span>
                    {task.completed ? null : (
                        <span title='Edit' onClick={ () => setUpdateData({
                        id: task.id,
                        title: task.title,
                        completed: task.completed ? true : false
                        })}>
                        <FontAwesomeIcon icon={ faPen }></FontAwesomeIcon>
                        </span>
                    )}
                    <span title='Delete' onClick={ () => deleteTask(task.id) }>
                        <FontAwesomeIcon icon={ faTrashCan }></FontAwesomeIcon>
                    </span>
                    </div>
                </div>
                </React.Fragment>
            )
        })}
        </>
    );
}

export default ToDo;