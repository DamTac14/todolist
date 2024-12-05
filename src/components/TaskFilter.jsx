import React from "react";

const TaskFilter = ({ filter, setFilter }) => {
    return (
        <select
            className="task-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
        >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Complete">Complete</option>
        </select>
    );
};

export default TaskFilter;
