import React, { useState } from "react";
import TaskCounter from "./TaskCounter";
import TaskFilter from "./TaskFilter";

const TodoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a todo app", completed: true },
    ]);
    const [filter, setFilter] = useState("All");

    const remainingTasks = tasks.filter(task => !task.completed).length;

    const filteredTasks = tasks.filter(task => {
        if (filter === "Active") return !task.completed;
        if (filter === "Complete") return task.completed;
        return true;
    });

    return (
        <div>
            <TaskCounter remainingTasks={remainingTasks} />
            <TaskFilter filter={filter} setFilter={setFilter} />
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() =>
                                setTasks(tasks.map(t =>
                                    t.id === task.id ? { ...t, completed: !t.completed } : t
                                ))
                            }
                        />
                        {task.text}
                        <button onClick={() => setTasks(tasks.filter(task => !task.completed))}>
                            Clear Completed
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
