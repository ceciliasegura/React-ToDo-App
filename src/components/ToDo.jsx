export default function ToDo({ task, deleteTask, completeTask }) {

    const onClickDelete = (e, id) => {
        e.preventDefault();
        deleteTask(id);
    }

    const onClickComplete = (e, id) => {
        e.preventDefault();
        completeTask(id);
    }
    const classes = "div-todo " + task.priority;

    return (

        <div className={classes}>
            <p className={task.completed ? "text-line-through" : ""}>{task.value}</p>
            <p className={task.completed ? "text-line-through" : ""}>Creation Date: {task.creationDate}</p>
            <p className={task.completed ? "text-line-through" : ""}>Finish Date: {task.finishDate}</p>
            <button onClick={(e) => onClickDelete(e, task.id)}>Delete</button>
            {(!task.completed) ?
                <button onClick={(e) => onClickComplete(e, task.id)}>Complete</button>
                : ''}
        </div>
    )
}
