import React, { useState } from 'react';
import './TodoList.css';

// I usually leave informal comments for myself to understand it later, 
// otherwise, only god will know what I have written :))))

const TodoList = () => {
  {/* I need to apply the functionality for handling user input, managing todo items, and dynamically rendering them, which would be implemented using React state and event handling.*/}
  const [todos, setTodos] = useState([]); {/*list of all headers. todo[i]: gives you the second todo item including a header and list of tasks*/}
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({}); {/*A temporary object that stores what the user is typing into each heading’s input box.*/}

  const handleAddTodo = () => {
    if (headingInput.trim() !== ''){
      setTodos ([...todos, {heading: headingInput, lists: []}]); {/*I am adding one todo item, but its list of tasks is still empty. */}
      setHeadingInput ('');
    }
  };

// Function to handle adding a new list item to a specific todo heading (adds it to the list of tasks, then clears the box)
const handleAddList = (index) => {
    // Check if the input for the given index is not empty or just whitespace
    if (listInputs[index] && listInputs[index].trim() !== '') {
        const newTodos = [...todos]; // Create a copy of the current todos array
        //"lists" is a property inside each object in my todos array, the list of tasks under header, defined in "handleAddTodo" function.
        newTodos[index].lists.push(listInputs[index]); // Add the new list item to the corresponding heading's list
        setTodos(newTodos); // Update the todos state with the new list item
        setListInputs({ ...listInputs, [index]: '' }); // Clear the input field for that index
    }
};

// Function to update list input value for a specific heading index
const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value }); // Update the listInputs state for the corresponding index
};

  const handleDeleteTodo = (index) => {
    // Create a shallow copy of the current todos array
    const newTodos = [...todos];
    // Remove the todo at the specified index
    newTodos.splice(index, 1);
    // Update the state with the new array (without the deleted todo)
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
          <div className="input-container">
            {/*Add onChange event handler to update headingInput state*/}
            <input type="text" className="heading-input" placeholder="Enter heading" value={headingInput} onChange={(e) => {setHeadingInput(e.target.value);}} /> 
            {/* Button to add the entered heading to the todo list */}
            <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
          </div>
      </div>

      {/*Display todo headings using the output of function handleAddTodo.
      This block displays each todo with its heading, its list of tasks, and input to add new tasks.
      It also lets the user delete a todo or add tasks under it by index.
      */}

      <div className="todo_main">
        {todos.map((todo, index) => ( // Iterate over each todo item in the todos array (an element including a header and its list of tasks)
             <div key={index} className="todo-card"> {/*this <div> represents item #index in the list. */}
                <div className="heading_todo">
                  {/* Display the heading text of the current todo item */}
                  <h3>{todo.heading}</h3> {/* Display the heading here */}
                  {/* Button to delete the current heading by passing its index */}
                  <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>

                  <div className='add_list'>
                    {/* Input field for adding a new item under a specific heading */}
                    <input
                      type="text"
                      className="list-input"
                      placeholder="Add List"
                      value={listInputs[index] || ''}// Use the value from listInputs array based on the current heading index, only to be able to show what you have written
                      onChange={(e) => handleListInputChange(index, e.target.value)}/>
                    {/* Button to add the list item to the corresponding heading */}
                    <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
                  </div> 

                  <ul>
                  {/* Iterate over each list item inside the current todo */}
                    {todo.lists.map((list, listIndex) => (
                      <li key={listIndex} className='todo_inside_list'>
                        {/* Display the text content of the list item */}
                        <p>{list}</p>
                      </li>
                     ))}
                  </ul> 
                                                 
                </div>
             </div>
         ))}
        
      </div>
    </>
  );
};

export default TodoList;
