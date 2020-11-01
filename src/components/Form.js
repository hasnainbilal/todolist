import React from 'react';


function Form({setInputText,inputText,setTodos,todos,setStatus}) {
    const inputEventHandler = (event) => setInputText(event.target.value);
    const submitTodoHandler = event => {
        event.preventDefault();
        setTodos([...todos,{
            text:inputText,
            completed:false,
            id:Math.random()*1000,
        }]);
        setInputText("");
    }
    const statusHandler = event => setStatus(event.target.value);
    return (
        <div>
            <form onSubmit={submitTodoHandler}>
                <input 
                    type="text" 
                    className="todo-input" 
                    value={inputText} 
                    onChange={inputEventHandler}
                    autoComplete="off"
                />

                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>

                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>

            </form>
        </div>
    );
}

export default Form;
