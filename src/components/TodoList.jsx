import React, { useState } from "react";
import TaskCounter from "./TaskCounter";

const TodoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a todo app", completed: true },
    ]);

    const remainingTasks = tasks.filter(task => !task.completed).length;


    return (
        <div>
            <TaskCounter remainingTasks={remainingTasks} />
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
