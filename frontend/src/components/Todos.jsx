//todos will be an array of todos
export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return  <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button  onClick={() => {
            // axios
            fetch("http://localhost:3000/completed", {
                method: "POST",
                body: JSON.stringify({
                    id: todo._id
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo marked as completed");
                })
        }}>{todo.Completed===true?"Completed":"Mark as Complete"}</button>
            </div>
        })}
    </div>
}