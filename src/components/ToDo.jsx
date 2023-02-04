export default function ToDo({ task, deleteTask, completeTask }) {

    const onClickDelete = (e, id) => {
        e.preventDefault();
        deleteTask(id);
    }

    const onClickComplete = (e, id) => {
        e.preventDefault();
        completeTask(id);
    }

    return (
        <div className="div-todo">
            <p className={task.completed ? "text-line-through" : ""}>{task.value}</p>
            <button onClick={(e) => onClickDelete(e, task.id)}>Delete</button>
            <button onClick={(e) => onClickComplete(e, task.id)}>Complete</button>
        </div>
    )
}
