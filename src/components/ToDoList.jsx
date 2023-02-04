import ToDo from "./ToDo";

export default function ToDoList({tasks}) {
    return (
        <div className="div-todo-list">
            {tasks.map((v, k) => <ToDo task={v} key={k} />)}
        </div>
    )
}