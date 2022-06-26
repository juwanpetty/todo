import React, { useState } from "react";

type FeedProps = {};

const initialTodos = [
  {
    id: 1,
    completed: true,
    text: "Do the dishes",
  },
  {
    id: 2,
    completed: true,
    text: "Walk the dog",
  },
  {
    id: 3,
    completed: false,
    text: "Mow the lawn",
  },
];

const Feed = (props: FeedProps) => {
  const [todos, setTodos] = useState(initialTodos);
  const [todoText, setTodoText] = useState("");

  const addTodo = (text: string) => {
    if (text.trim().length < 1) return;

    const newTodo = {
      id: 100 * Math.random(),
      completed: false,
      text,
    };

    setTodos([...todos, newTodo]);
    setTodoText("");
  };

  const deleteTodo = (id: number) => {
    const updatedTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodoList);
  };

  const updateTodo = (status: boolean, id: number) => {
    // TODO: update text, status
    const updatedTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: status };
      }

      return todo;
    });

    setTodos(updatedTodoList);
  };

  const onChange = (text: string) => {
    setTodoText(text);
  };

  return (
    <div>
      <p>Today</p>
      <ul>
        {todos.length
          ? todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  // checked={todo.completed}
                  defaultChecked={todo.completed}
                  onChange={(event) =>
                    updateTodo(event.target.checked, todo.id)
                  }
                />
                {/* TODO: controlled checkbox */}
                <span>{todo.text}</span>
                <button type="button" onClick={() => deleteTodo(todo.id)}>
                  X
                </button>
              </li>
            ))
          : null}
      </ul>

      <input
        type="text"
        value={todoText}
        onChange={(event) => onChange(event.target.value)}
      />
      {/* TODO: button that turns into input */}
      <button type="button" onClick={() => addTodo(todoText)}>
        Add todo
      </button>
    </div>
  );
};

export default Feed;
