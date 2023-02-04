export default function Form({ addTask }) {

    const handleOnSubmit = (event) => {
        event.preventDefault();
        addTask(event.target.elements[0].value, event.target.elements[1].value);
    };
    return (
        <>
            <form className="form" onSubmit={handleOnSubmit}>
                <input type="text" placeholder="introduce tarea"></input>
                <label htmlFor="priority">Choose a priority:</label>
                
                <select name="priority" id="priority">
                    <option value="hight">Hight</option>
                    <option value="middel">Middel</option>
                    <option value="low">Low</option>
                </select>
                <input type="submit"></input>
            </form>
        </>
    )
}