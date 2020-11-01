import React from 'react';

function Todo({item,todos,setTodos,todo}) {
    const deleteHandler = () => setTodos(todos.filter(element => element.id !== todo.id));
    const completeHandler = () => {
        setTodos(todos.map(data=>{
            if(data.id === todo.id){
                return {
                    ...data, completed:!data.completed
                }
            }
            return data;
        }));
    }
    return (
        <div>
            <div className="todo">
                <div className={`todo-item ${todo.completed && "completed"}`}>
                    <li>{item}</li>
                    <button className="complete-btn" onClick={completeHandler}>
                        <i className="fas fa-check"></i>
                    </button>
                    <button className="trash-btn" onClick={deleteHandler}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Todo;
