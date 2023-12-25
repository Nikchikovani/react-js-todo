import { useState } from "react";

import "./todo.css";

export function Todo({todo, deleteTodo, upDateTodo}) {

    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <div className="todo">
            <div>
                {
                    isEditMode ? (
                        <>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                const title = e.target[0].value;
                                const description = e.target[1].value;

                                upDateTodo({id: todo.id, title, description})
                                setIsEditMode(false)
                            }}>
                                <input type='text' placeholder="სათაური" defaultValue={todo.title}/>
                                <input type='text' placeholder="აღწერა" defaultValue={todo.description}/>
                                <button>შენახვა</button>
                            </form>
                        </>
                    ) : (
                        <>
                           <h4>{todo.title}</h4>
                            <p>{todo.description}</p>
                        </>
                    )
                }
             
            </div>
            <div>
                <button onClick={() => setIsEditMode(!isEditMode)}>განახლება</button>
                <button onClick={() => deleteTodo(todo)}>წაშლა</button>
            </div>
           
        </div>
    )
}