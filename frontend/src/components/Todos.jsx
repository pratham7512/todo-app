//todos will be an array of todos
export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return  <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={}>{todo.Completed===true?"Completed":"Mark as Complete"}</button>
            </div>
        })}
    </div>
}