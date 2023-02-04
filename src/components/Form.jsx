export default function Form({ addTask }) {

    const handleOnSubmit = (event) => {
        event.preventDefault();
        addTask(event.target.elements[0].value);
    };
    return (
        <>
            <form className="form" onSubmit={handleOnSubmit}>
                <input type="text" placeholder="introduce tarea"></input>
                <input type="submit"></input>
            </form>
        </>
    )
}