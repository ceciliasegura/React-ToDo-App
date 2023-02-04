import ToDo from "./ToDo";

export default function ToDoList({tasks, deleteTask, completeTask}) {
    return (
        <div className="div-todo-list">
            {tasks.map((v, k) => <ToDo task={v} key={k} deleteTask={deleteTask} completeTask={completeTask}/>)}
        </div>
    )
}