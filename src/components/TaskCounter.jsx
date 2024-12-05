import React from "react";

const TaskCounter = ({ remainingTasks }) => {
    return <p className="task-counter">Remaining tasks: {remainingTasks}</p>;
};

export default TaskCounter;
