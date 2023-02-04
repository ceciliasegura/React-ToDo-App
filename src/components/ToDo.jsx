export default function ToDo({task}) {
    return (
        <div className="div-todo">
            <p>{task.value}</p>
            <button>Delete</button>
            <button>Complete</button>
        </div>
    )
}