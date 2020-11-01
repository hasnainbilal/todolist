import React  from 'react';
import Todo from './Todo';

function TodoList({setTodos,filtertodos}) {
    
    return (
        <div>
                <div className="todo-container">
                    <ul className="todo-list">
                        {filtertodos.map((todo)=>(
                            <Todo 
                                todos={filtertodos}
                                item={todo.text}
                                setTodos={setTodos}
                                key={todo.id}
                                todo={todo}
                             />
                        ))}
                    </ul>
                </div>
        </div>
    );
}

export default TodoList;
